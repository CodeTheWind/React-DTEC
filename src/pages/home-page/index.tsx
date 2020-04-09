import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackTop from '../../components/BackTop';
import AsideItem from '../../components/AsideItem';
import { Carousel, message } from 'antd';
import { ArticleItemType, ArticleListParamsType, UserLoginParamsType } from './data';
import { isPhone, checkRegisterPassword } from './util';
import { getCategoryList } from '../../services/category/service';
import { getArticleList, getArticleListOfType } from '../../services/article/service';
import { login, logout, register, getPersonalData } from '../../services/user/service';
import './style.less';

const BASE_URL = "http://127.0.0.1";

class HomePage extends React.Component {
  // 获取文章列表请求参数
  private articleListParams: ArticleListParamsType = {
    page: 1,
    typeId: 0,
    keyword: '',
  };

  state = {
    registerWindowFlag: false,
    isLogin: false,
    hasNextPage: true,
    lphone: '',
    lpasswd: '',
    rphone: '',
    rpasswd: '',
    rcpasswd: '',
    typeList: [],
    articleList: [],
    articleHotList: [],
    articlePopularList: [],
    userData: {
      username: '',
      _id: '',
      avatar: '',
      motto: '',
      admin: false,
    },
  }
  /**
   * 初始加载文章分类列表和文章列表、用户信息
   */
  componentDidMount() {
    this.getPersonalData();
    this.getArticleList();

    getCategoryList().then((res: any) => {
      res.data.unshift({ typeName: '全部', typeId: 0 });
      this.setState({ typeList: res.data });
    });

    getArticleListOfType('hot').then((res: any) => {
      this.setState({ articleHotList: res.data });
    });

    getArticleListOfType('popular').then((res: any) => {
      this.setState({ articlePopularList: res.data });
    })
  }

  /**
   * 获取用户信息
   */
  getPersonalData = () => {
    getPersonalData().then((res: any) => {
      if (res.state !== 302) {
        this.setState({ isLogin: true, userData: res.data });
      }
    })
  }

  /**
   * 获取文章列表
   */
  getArticleList = () => {
    getArticleList(this.articleListParams).then((res: any) => {
      if (res.data.length < 10) {
        this.setState({ hasNextPage: false })
      }
      this.setState({ articleList: res.data });
    })
  }

  /**
   * 搜索文章
   */
  onSearchArticle = (keyword: string) => {
    this.articleListParams.keyword = keyword;
    this.articleListParams.page = 1;
    this.getArticleList();
  }
  /**
   * 筛选分类文章
   */
  onScreenArticle = (typeId: number) => {
    this.articleListParams.typeId = typeId;
    this.articleListParams.page = 1;
    this.getArticleList();
  }
  /**
   * 加载更多
   */
  onLoadMore = () => {
    this.articleListParams.page++;
    let articleList: ArticleItemType[] = this.state.articleList;
    getArticleList(this.articleListParams).then((res: any) => {
      articleList.push(...res.data)
      this.setState({ articleList });
      if (res.data.length <= 10) {
        this.setState({ hasNextPage: false })
      }
    })
  }

  /**
   * 打开登录弹窗
   */
  onShowRegisterWindow = () => {
    this.setState({ registerWindowFlag: true });
  }
  /**
   * 关闭登录弹窗
   */
  onHideRegisterWindow = () => {
    this.setState({ registerWindowFlag: false });
  }

  /**
   * 手机号、密码数据双向绑定
   */
  onBindLphone = (e: any) => {
    this.setState({ lphone: e.target.value });
  }
  onBindLpasswd = (e: any) => {
    this.setState({ lpasswd: e.target.value });
  }
  onBindRphone = (e: any) => {
    this.setState({ rphone: e.target.value });
  }
  onBindRpasswd = (e: any) => {
    this.setState({ rpasswd: e.target.value });
  }
  onBindRcpasswd = (e: any) => {
    this.setState({ rcpasswd: e.target.value });
  }

  /**
   * 登录
   */
  onLogin = () => {
    const { lphone, lpasswd } = this.state;
    const params: UserLoginParamsType = { tel: lphone, password: lpasswd };
    if (lphone !== '') {
      if (isPhone(lphone)) {
        if (lpasswd !== '') {
          message.loading('登录中', 2, () => {
            login(params).then((res: any) => {
              if (res.state === 0) {
                message.success('登录成功！', 1);
                this.getPersonalData();
              } else {
                message.error(res.msg);
              }
            });
          })
        } else {
          message.error('请输入密码！');
        }
      } else {
        message.error('手机号格式不正确！');
      }
    } else {
      message.error('请输入手机号');
    }
  }

  /**
   * 注册
   */
  onRegister = () => {
    const { rphone, rpasswd, rcpasswd } = this.state;
    const params: UserLoginParamsType = { tel: rphone, password: rpasswd };

    if (isPhone(rphone)) {
      switch (checkRegisterPassword(rpasswd, rcpasswd)) {
        case 0:
          register(params).then((res: any) => {
            if (res.state === 0) {
              message.success('注册成功，快去登录吧！', 2);
              this.setState({ registerWindowFlag: false });
            } else {
              message.error(res.msg);
            }
          });
          break;
        case 1:
          message.error('密码不能为空！');
          break;
        case 2:
          message.error('两次输入的密码不一致，请重新输入！');
          break;
      }
    } else {
      message.error('手机号格式不正确！');
    }
  }

  /**
   * 退出登录
   */
  onLogout = () => {
    logout().then((res: any) => {
      if (res.state === 0) {
        this.setState({ isLogin: false });
      }
    })
  }

  render() {
    const { userData } = this.state;

    return (
      <main className="main">
        <Header />
        <NavBar
          category={this.state.typeList}
          onSearch={this.onSearchArticle}
          onScreen={this.onScreenArticle}
        />
        <section className="banner">
          <div className="container">
            <Carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </div>
        </section>
        <section className="main">
          <div className="container content">
            {/* 文章列表 */}
            <div className="article-list">
              {this.state.articleList.map((item: ArticleItemType) => (
                <div className="article-item" key={item._id}>
                  <h2>{item.title}</h2>
                  <span>发布于 {item.date}</span>
                  <p className="multiple-ellipsis">{item.des}</p>
                  <Link to={`/article/${item._id}`}>continune reading</Link>
                </div>
              ))}
              {this.state.hasNextPage ?
                <button className="load-more" onClick={this.onLoadMore}>加载更多</button> :
                <button className="load-more">已经到底啦！</button>}
            </div>
            {/* 侧边栏 */}
            <aside className="hot-list">
              {
                this.state.isLogin ?
                  <section className="user">
                    <div className="title">个人信息</div>
                    <div className="base-data clearfix">
                      <div className="avatar">
                        <img src={`${BASE_URL}${userData.avatar}`} alt="" />
                      </div>
                      <div className="info">
                        <Link to={`/user/${userData._id}`}>{userData.username}</Link>
                        <p className="alone-ellipsis">{userData.motto || '一句话介绍自己'}</p>
                      </div>
                    </div>
                    <div className="action-panel">
                      <div className="action-item"><Link to={`/post/${userData._id}`}>写文章</Link></div>
                      <div className="action-item"><Link to={`/user/${userData._id}`}>我的主页</Link></div>
                      <div className="action-item" onClick={this.onLogout}>退出</div>
                    </div>
                    {
                      userData.admin &&
                      <div className="backstage"><Link to={`/admin`}>进入后台</Link></div>
                    }
                  </section> :
                  <section className="login">
                    <div className="title">
                      用户登录<span onClick={this.onShowRegisterWindow}>注册</span>
                    </div>
                    <div className="login-box">
                      <input type="text" placeholder="手机号" onChange={this.onBindLphone} value={this.state.lphone} />
                      <input type="password" placeholder="密码" onChange={this.onBindLpasswd} value={this.state.lpasswd} />
                      <button onClick={this.onLogin}>登录</button>
                    </div>
                  </section>
              }
              <AsideItem title="阅读榜" list={this.state.articleHotList} />
              <AsideItem title="点赞榜" list={this.state.articlePopularList} />
            </aside>
          </div>
        </section>
        <Footer />
        <BackTop />
        {/* 注册窗口 */}
        {
          this.state.registerWindowFlag ?
            <div className="register">
              <div className="mask">
                <div className="register-box">
                  <div className="title">
                    注册社区账号<span onClick={this.onHideRegisterWindow}>×</span>
                  </div>
                  <div className="register-content">
                    <h1>DTEC</h1>
                    <input type="text" placeholder="手机号" onChange={this.onBindRphone} value={this.state.rphone} />
                    <input type="password" placeholder="密码" onChange={this.onBindRpasswd} value={this.state.rpasswd} />
                    <input type="password" placeholder="确认密码" onChange={this.onBindRcpasswd} value={this.state.rcpasswd} />
                    <button onClick={this.onRegister}>注册</button>
                  </div>
                </div>
              </div>
            </div> :
            null
        }
      </main>
    )
  }
};

export default HomePage;