import React from 'react';
import './style.less';
import { Link } from 'react-router-dom';
import { SettingNavPropsType } from '../../data';

class SettingNav extends React.Component<SettingNavPropsType> {
  private linkNav = [
    { title: '个人资料', link: 'profile' },
    { title: '修改密码', link: 'password' },
    { title: '账号关联', link: 'account' },
  ]
  render() {
    return (
      <nav className="setting-nav">
        <div className="container">
          {this.linkNav.map(item => (
            <Link to={`/user/setting/${item.link}`}
              className={item.link === this.props.type ? 'link' : ''}
              key={item.link}
            >{item.title}</Link>
          ))}
        </div>
      </nav>
    )
  }
}

export default SettingNav;