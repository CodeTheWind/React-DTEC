import React from 'react';
import './style.less';

class Footer extends React.Component {
  render() {
    
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <ul className="nav-link">
              <li><a href="/">关于</a></li>
              <li><a href="/">使用指南</a></li>
              <li><a href="/">建议反馈</a></li>
              <li><a href="/">加入我们</a></li>
              <li><a href="/">商务合作</a></li>
              <li><a href="/">友情链接</a></li>
            </ul>
            <ul className="admin-info">
              <li><i className="iconfont icon-wb"></i><a href="/">这位同学叫阿宇</a></li>
              <li><i className="iconfont icon-email"></i><a href="/">dy_3364@yeah.net</a></li>
            </ul>
          </div>
          <div className="row secend">
            <span>© All Right Reserved</span>
            <a href="/"><i className="iconfont icon-twitter"></i></a>
            <a href="/"><i className="iconfont icon-ins"></i></a>
            <a href="/"><i className="iconfont icon-github"></i></a>
            <span className="motto">人生没有白走的路，每一步都算数。</span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;