import React from 'react';
import { Link } from 'react-router-dom'
import { NavListType } from './data';
import './style.less';

const logo = require('../../assets/logo.png');
const NAV_LIST: NavListType[] = [
  { title: '首页', link: '/' },
  { title: '专题', link: '/a' },
  { title: '面试', link: '/b' },
  { title: '小册', link: '/c' },
  { title: 'APP', link: '/d' },
  { title: 'GitHub', link: '/e' }
];

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <img src={logo} alt="" className="logo" />
          <ul className="nav-list">
            {
              NAV_LIST.map((item: NavListType) => (
                <li key={item.title}><Link to={item.link}>{item.title}</Link></li>
              ))
            }
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;