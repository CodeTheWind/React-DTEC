import React from 'react';
import UserList from './user-list';
import ArticleList from './article-list';
import CategoryList from './category-list';
import BannerList from './banner-list';
import Default from './default';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import { BackStoragePropsType, BackStorageStateType } from './data';
import { getPersonalData } from '../../services/user/service';
import './style.less';


const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

const NAV_LINK = [
  { title: '用户管理', link: 'user-management', iconType: 'user' },
  { title: '文章管理', link: 'article-management', iconType: 'read' },
  { title: '分类管理', link: 'category-management', iconType: 'tag' },
]


class BackStage extends React.Component<BackStoragePropsType, BackStorageStateType> {

  private defaultSelectedKeys: string[] = [''];
  private defaultOpenKeys: string[] = [''];

  state = {
    collapsed: false,
    userData: {
      avatar: '',
      username: '',
    }
  };

  componentDidMount = () => {
    const type = this.props.location.pathname.slice(7) || '';

    this.defaultSelectedKeys.push(type);

    if (NAV_LINK.some(item => item.link === type)) {
      this.defaultOpenKeys.push('object-management');
    }

    // 获取当前登录人信息
    getPersonalData().then((res: any) => {
      if (res.state === 302 || !res.data.admin) {
        this.props.history.push('/exception/404');
      } else {
        this.setState({ userData: res.data });
      }
    })

  }

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  render() {
    const { userData } = this.state;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width="250">
          <div className="logo">
            <Link to="/admin" className={this.state.collapsed ? 'small' : 'normal'}>DTEC</Link>
          </div>
          <Menu theme="dark"
            defaultSelectedKeys={this.defaultSelectedKeys}
            defaultOpenKeys={this.defaultOpenKeys}
            mode="inline">

            <SubMenu
              key="object-management"
              title={
                <span>
                  <Icon type="apartment" />
                  <span>对象管理</span>
                </span>
              }
            >
              {NAV_LINK.map(item => (
                <Menu.Item key={item.link}>
                  <Link to={`/admin/${item.link}`}><Icon type={item.iconType} /><span>{item.title}</span></Link>
                </Menu.Item>
              ))}
            </SubMenu>
            <Menu.Item key="banner-management">
              <Link to="/admin/banner-management"><Icon type="picture" /><span>封面图设置</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="backstage-header">
            <div className="username">
              <span className="avatar">
                <img src={`http://127.0.0.1${userData.avatar}`} alt="avatar" />
              </span>
              <span>{userData.username}</span>
            </div>
          </Header>

          <Content className="backstage-content" >
            <Route exact path="/admin/" component={Default} />
            <Route exact path="/admin/user-management" component={UserList} />
            <Route exact path="/admin/article-management" component={ArticleList} />
            <Route exact path="/admin/category-management" component={CategoryList} />
            <Route exact path="/admin/banner-management" component={BannerList} />
          </Content>

          <Footer style={{ textAlign: 'center' }}>开发者技术交流社区 ©2020 Created by deng yu</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BackStage;