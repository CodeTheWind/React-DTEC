import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { message } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ArticleDataType, IState } from './data';
import { GetArticleDataParamsType } from '../../services/article/data';
import { getUserData } from '../../services/user/service';
import { getArticleListOfUser, deleteArticle } from '../../services/article/service';
import './style.less';
import copy from 'copy-to-clipboard';

const BASE_URL = "http://127.0.0.1";

class UserCenter extends React.Component<RouteComponentProps<any>, IState> {

  state = {
    userData: {
      _id: '',
      username: '',
      avatar: '',
      motto: '',
      profession: '',
      company: '',
      likes: 0,
      views: 0,
    },
    articleList: [],
    owner: true,
  }

  componentDidMount() {
    const { params } = this.props.match;
    getUserData(params).then((res: any) => {
      // 用户不存在
      if (res.state === 404) {
        this.props.history.push('/exception/404');
      } else {
        if (res.owner) {
          this.setState({ userData: res.data });
        } else {
          this.setState({ userData: res.data, owner: false });
        }
      }
    });
    this.getUserPost(params);
  }

  /**
   * 获取用户发布的文章
   */
  getUserPost = (params: GetArticleDataParamsType) => {
    getArticleListOfUser(params).then((res: any) => {
      res.data.forEach((item: ArticleDataType) => {
        item.operation = false;
      });
      this.setState({ articleList: res.data });
    })
  }

  /**
   * 打开操作面板
   */
  showOperationPanel = (ids: string) => {
    const { articleList } = this.state;
    articleList.forEach((item: ArticleDataType) => {
      if (item._id === ids) {
        item.operation = true;
      } else {
        item.operation = false;
      }
    });
    this.setState({ articleList });
  }

  /**
   * 关闭操作面板
   */
  closeOperationPanel = () => {
    const { articleList } = this.state;
    articleList.forEach((item: ArticleDataType) => {
      item.operation = false;
    });
    this.setState({ articleList });
  }

  /**
   * 修改文章
   */
  updateArticle = (ids: string) => {
    this.props.history.push('/edit/' + ids);
  }

  /**
   * 删除文章
   */
  deleteArticle = (ids: string) => {
    const params: GetArticleDataParamsType = { ids };
    const articleListParams: GetArticleDataParamsType = { ids: this.props.match.params.ids };

    deleteArticle(params).then((res: any) => {
      if (!res.state) {
        message.success('删除成功！', 1.5, () => {
          this.getUserPost(articleListParams);
        });
      } else {
        message.error(res.msg, 1.5);
      }
    })
  }

  /**
   * 分享文章
   */
  onShareArticle = (ids: string): void => {
    const url = window.location.href;
    let newUrl = url.slice(0, url.indexOf("#")) + '/#/article/' + ids;

    if (copy(newUrl)) {
      message.success('复制成功,快去分享吧！');
    } else {
      message.error('复制失败，请重试！');
    }
  }

  render() {
    const { userData, owner, articleList } = this.state;

    return (
      <>
        <Header />
        <main className="container user-center" onClick={this.closeOperationPanel}>
          <section className="user-panel">
            <div className="base-data clearfix">
              <div className="avatar">
                <img src={`${BASE_URL}${userData.avatar}`} alt="" />
              </div>
              <div className="info">
                <p className="username">{userData.username}</p>
                <p className="job">
                  <i className="iconfont icon-job"></i>
                  {userData.profession || '你的职业是什么？'}<span className="divier">|</span>{userData.company || '暂无'}
                </p>
                <p className="motto">
                  <i className="iconfont icon-card"></i>
                  {userData.motto || '你的信仰是什么？'}
                </p>
                <div className="btn-group">
                  {
                    owner ?
                      <Link to='/user/setting/profile'>编辑个人资料</Link> :
                      <>
                        <button className="letter">私信</button>
                        <button className="follow">关注</button>
                      </>
                  }
                </div>
              </div>
            </div>
            <ul className="tab-card">
              <li>动态</li>
              <li>专栏</li>
              <li>沸点</li>
              <li>分享</li>
              <li>赞</li>
              <li>小册</li>
            </ul>
            <div className="dynamic-panel">
              {
                articleList.map((item: ArticleDataType) => (
                  <div className="dynamic" key={item._id}>
                    <div className="base-info clearfix">
                      <div className="avatar">
                        <img src={`${BASE_URL}${userData.avatar}`} alt="" />
                      </div>
                      <div className="info">
                        <p className="username">{userData.username}</p>
                        <p>{userData.profession || '暂无'}<span>·</span>{item.date}</p>
                      </div>
                    </div>
                    <Link to={`/article/${item._id}`} className="article">
                      <p className="title">
                        <span>{item.category}</span>
                        {item.title}
                      </p>
                      <p className="desc">{item.des}</p>
                    </Link>
                    <div className="action-box">
                      <div className="action-item">
                        <i className="iconfont icon-like"></i>{item.likes === 0 ? '赞' : item.likes}
                      </div>
                      <div className="action-item">
                        <i className="iconfont icon-chat"></i>评论
                      </div>
                      <div className="action-item" onClick={() => this.onShareArticle(item._id)}>
                        <i className="iconfont icon-share"></i>分享
                      </div>
                      {owner && <div className="action-item" onClick={(e: any) => { e.stopPropagation(); this.showOperationPanel(item._id) }}>
                        <i className="iconfont icon-manage"></i>操作
                        {item.operation && <ul className="operation">
                          <li onClick={() => this.updateArticle(item._id)}>修改</li>
                          <li onClick={() => this.deleteArticle(item._id)}>删除</li>
                        </ul>}
                      </div>}
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
          <aside className="user-aside">
            <section className="achievement">
              <div className="title">个人成就</div>
              <ul className="achievement-list">
                <li><i className="iconfont icon-like"></i>文章被点赞 {userData.likes}</li>
                <li><i className="iconfont icon-view"></i>文章被阅读 {userData.views}</li>
                <li><i className="iconfont icon-collection"></i>文章被收藏 0</li>
              </ul>
            </section>
          </aside>
        </main>
        <Footer />
      </>
    )
  }
}

export default UserCenter;