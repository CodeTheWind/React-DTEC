import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AsideItem from '../../components/AsideItem';
import Suspended from './components/Suspended';
import AuthorData from './components/AuthorData';
import { message } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';
import { getAuthorOtherArticles } from './utils';
import { IState } from './data';
import {
  getArticleDetails,
  getArticleListOfType,
  getArticleListOfUser,
  getArticleComments,
  addArticleComment,
  praiseArticle,
  collectArticle
} from '../../services/article/service';
import { getPersonalData, getUserData } from '../../services/user/service';
import './style.less';

const BASE_URL = "http://127.0.0.1";


class ArticleDetails extends React.Component<RouteComponentProps<any>, IState> {
  state = {
    articleData: {
      _id: '',
      title: '',
      des: '',
      content: '',
      date: '',
      views: 0,
      category: {
        _id: '',
        typeId: '',
        typeName: '',
      },
      tags: [''],
      author: '',
    },
    commentList: [],

    // 该作者发布的其它文章
    authorOthers: [],
    authorAchievement: {
      _id: '',
      username: '',
      avatar: '',
      motto: '',
      likes: 0,
      views: 0
    },
    // 阅读量排行榜单
    articleHotList: [],

    userAvatar: '',
    comment: '',
    submitFlag: false,
    isLogin: false,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { params } = this.props.match;
    // 获取阅读量排行榜
    getArticleListOfType('hot').then((res: any) => {
      this.setState({ articleHotList: res.data });
    });
    // 获取文章详情
    this.getArticleDetails(params.ids);
    // 获取文章评论
    this.getArticleComments(params.ids);
    // 获取当前登录人的信息
    getPersonalData().then((res: any) => {
      if (res.state === 302) {
        this.setState({ isLogin: false });
      } else {
        this.setState({ isLogin: true, userAvatar: res.data.avatar });
      }
    })
  }

  /**
   * 获取文章详情和作者发布的其它文章
   */
  getArticleDetails = (ids: string) => {
    const params = { ids };
    getArticleDetails(params).then((res: any) => {
      if (res.state === 404) {
        this.props.history.push('/exception/404');
      } else {
        this.setState({ articleData: res.data }, () => {
          const params = { ids: this.state.articleData.author };
          getArticleListOfUser(params).then(res => {
            this.setState({ authorOthers: res.data });
          });
          getUserData(params).then(res => {
            this.setState({ authorAchievement: res.data });
          })
        });
      }
    })
  }

  /**
   * 获取文章评论
   */
  getArticleComments = (ids: string) => {
    const params = { ids };
    getArticleComments(params).then((res) => {
      this.setState({ commentList: res.data });
    })
  }

  /**
   * 绑定评论数据
   */
  onHandleConmment = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ comment: e.target.value });
  }
  onFocusInput = () => {
    this.setState({ submitFlag: true });
  }
  onBlurInput = () => {
    if (this.state.comment === '') {
      this.setState({ submitFlag: false });
    }
  }

  /**
   * 点赞文章
   */
  onLikeArticle = () => {
    const { params } = this.props.match;
    praiseArticle(params).then((res: any) => {
      if (!res.state) {
        message.success(res.msg, 1.5);
      } else {
        message.error(res.msg, 1.5);
      }
    })
  }

  /**
   * 收藏文章
   */
  onCollectArticle = () => {
    const { params } = this.props.match;
    collectArticle(params).then((res: any) => {
      if (!res.state) {
        message.success(res.msg, 1.5);
      } else {
        message.error(res.msg, 1.5);
      }
    })
  }


  /**
   * 评论文章
   */
  onCommentArticle = () => {
    const params = { ids: this.state.articleData._id, content: this.state.comment };

    addArticleComment(params).then((res: any) => {
      if (res.state === 200) {
        this.setState({ comment: '', submitFlag: false });
        message.success(res.msg, 1.5, () => {
          this.getArticleComments(params.ids);
        });
      } else {
        message.error(res.msg, 1.5);
      }
    })
  }

  render() {
    const { articleData, commentList, authorOthers, authorAchievement } = this.state;
    const otherArticles = getAuthorOtherArticles(authorOthers, articleData._id);

    return (
      <>
        <Header />
        <main className="container article-details">
          <article>
            <h1>{articleData.title}</h1>
            <div className="article-info">
              <span>发布于 {articleData.date}</span>
              <span>阅读 {articleData.views}</span>
              <span>分类：{articleData.category.typeName}</span>
              <span>标签：{articleData.tags.join(' ')}</span>
            </div>
            <div className="article"
              dangerouslySetInnerHTML={{ __html: articleData.content }}
            ></div>
            <div className="comments">
              <div className="title">评论列表</div>
              {
                this.state.isLogin ?
                  <div className="action">
                    <div className="action-head">
                      <div className="avatar">
                        <img src={`${BASE_URL}${this.state.userAvatar}`} alt="" />
                      </div>
                      <div className="input">
                        <input type="text" placeholder="输入评论..."
                          onFocus={this.onFocusInput}
                          onBlur={this.onBlurInput}
                          onChange={this.onHandleConmment}
                          value={this.state.comment}
                        />
                      </div>
                    </div>
                    {this.state.submitFlag &&
                      <div className="action-submit">
                        <button disabled={this.state.comment !== '' ? false : true}
                          onClick={this.onCommentArticle}>评论</button>
                      </div>}
                  </div> :
                  <div className="tips">登录后才可评论</div>
              }

              <div className="comment-list">
                {commentList.length > 0 ?
                  commentList.map((item: any) => (
                    <div className="item" key={`${item.date}${item.user.username}`}>
                      <div className="avatar">
                        <Link to={`/user/${item.user._id}`} target="blank">
                          <img src={`${BASE_URL}${item.user.avatar}`} alt="" />
                        </Link>
                      </div>
                      <div className="item-content">
                        <p>
                          <Link to={`/user/${item.user._id}`} className="username" target="blank">{item.user.username}</Link>
                        </p>
                        <p className="comment">{item.content}</p>
                        <p className="date">{item.date}</p>
                      </div>
                    </div>
                  )) :
                  <p>暂无评论！</p>
                }
              </div>
            </div>
            <Suspended onLike={this.onLikeArticle} onCollect={this.onCollectArticle} />
          </article>
          <aside>
            <AuthorData userData={authorAchievement} />
            <AsideItem title="阅读量排行榜" list={this.state.articleHotList} />
            {otherArticles.length > 0 &&
              <AsideItem title="作者发布的其它文章" list={otherArticles} />}
          </aside>
        </main>
        <Footer />
      </>
    )
  }
};

export default ArticleDetails;