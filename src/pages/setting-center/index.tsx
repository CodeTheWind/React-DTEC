import React from 'react';
import Header from '../../components/Header';
import EditProfile from './EditProfile';
import UpdatePassword from './UpdatePassword';
import { Route, NavLink } from 'react-router-dom';
import { ProfileType } from './data';
import './style.less';

class SettingCenter extends React.Component<any, ProfileType> {

  private linkNav = [
    { title: '个人资料', link: 'profile' },
    { title: '修改密码', link: 'password' },
    { title: '账号关联', link: 'account' },
  ];

  render() {
    return (
      <>
        <Header />
        <nav className="setting-nav">
          <div className="container">
            {this.linkNav.map(item => (
              <NavLink to={`/user/setting/${item.link}`}
                key={item.link}
                activeClassName="link"
              >{item.title}</NavLink>
            ))}
          </div>
        </nav>
        <main className="edit-profile">
          <div className="container">

            <Route exact path="/user/setting/profile" component={EditProfile} />
            <Route exact path="/user/setting/password" component={UpdatePassword} />

          </div>
        </main>
      </>
    )
  }
}

export default SettingCenter;