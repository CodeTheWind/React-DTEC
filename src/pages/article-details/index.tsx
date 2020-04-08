import React from 'react';
import './style.less';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AsideItem from '../../components/AsideItem';
import Suspended from './components/Suspended';
import AuthorData from './components/AuthorData';
import { getArticleDetails, likeArticle, commentArticle } from './service';
import { getAuthorPost } from '../user-center/service';
import { message } from 'antd';
import './_mock';
import '../user-center/_mock';
import { getAuthorOtherArticles } from './util';
import { ArticleCommentType, ArticleDetailsStateType } from './data';
import { getPersonalData, getArticleHotList } from '../home-page/service';

const BASE_URL = "http://127.0.0.1";

class ArticleDetails extends React.Component<any, ArticleDetailsStateType> {
  state = {
    articleData: {
      _id: '',
      title: '',
      des: '',
      content: '',
      date: '',
      views: 0,
      typeName: '',
      tag: '',
      comments: [],
      author: {
        _id: '',
        username: '',
        avatar: '',
        motto: '',
      },
    },
    // 该作者发布的其它文章
    authorOthers: [],
    // 阅读量排行榜单
    articleHotList: [],
    likes: 0,
    views: 0,

    userAvatar: '',
    comment: '',
    submitFlag: false,
    isLogin: false,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { params } = this.props.match;
    // 获取阅读量排行榜
    getArticleHotList().then((res: any) => {
      this.setState({ articleHotList: res.data });
    });
    // 获取文章详情
    this.getArticleDetailsAndOthers(params.ids);
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
   * 获取文章详情和作者其它信息
   */
  getArticleDetailsAndOthers = (articleIds: string) => {
    const params = { ids: articleIds };
    getArticleDetails(params).then((res: any) => {
      if (res.state === 404) {
        this.props.history.push('/exception/404');
      } else {
        this.setState({
          articleData: res.data,
        });
        const param = { ids: res.data.author._id };
        getAuthorPost(param).then((res: any) => {
          const authorOthers = getAuthorOtherArticles(res.data, params.ids);
          this.setState({ authorOthers, views: res.views, likes: res.likes });
        })
      }
    })
  }

  /**
   * 绑定评论数据
   */
  onHandleConmment = (e: any) => {
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
  onLikesArticle = () => {
    const { params } = this.props.match;
    likeArticle(params).then((res: any) => {
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
    const params = { ids: this.props.match.params.ids, comment: this.state.comment };

    commentArticle(params).then((res: any) => {
      if (res.state === 0) {
        this.setState({ comment: '', submitFlag: false });
        message.success(res.msg, 1.5, () => {
          const { params } = this.props.match;
          getArticleDetails(params).then((res: any) => {
            if (res.state === 404) {
              this.props.history.push('/exception/404');
            } else {
              this.setState({ articleData: res.articleData });
            }
          })
        });
      } else {
        message.error(res.msg, 1.5);
      }
    })
  }

  render() {
    const { articleData } = this.state;

    return (
      <>
        <Header />
        <main className="container article-details">
          <article>
            <h1>{articleData.title}</h1>
            <div className="article-info">
              <span>发布于 {articleData.date}</span>
              <span>阅读 {articleData.views}</span>
              <span>分类：{articleData.typeName}</span>
              <span>标签：{articleData.tag}</span>
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
                {articleData.comments.length > 0 ?
                  articleData.comments.map((item: ArticleCommentType) => (
                    <div className="item" key={`${item.date}${item.username}`}>
                      <div className="avatar">
                        <img src={`${BASE_URL}${item.avatar}`} alt="" />
                      </div>
                      <div className="item-content">
                        <p>{item.username}</p>
                        <p>{item.content}</p>
                        <p className="date">{item.date}</p>
                      </div>
                    </div>
                  )) :
                  <p>暂无评论！</p>
                }
              </div>
            </div>
            <Suspended onLike={this.onLikesArticle} />
          </article>
          <aside>
            <AuthorData userData={articleData.author} likes={this.state.likes} views={this.state.views} />
            <AsideItem title="阅读量排行榜" list={this.state.articleHotList} />
            {this.state.authorOthers.length > 0 &&
              <AsideItem title="作者发布的其它文章" list={this.state.authorOthers} />}
          </aside>
        </main>
        <Footer />
      </>
    )
  }
};

export default ArticleDetails;