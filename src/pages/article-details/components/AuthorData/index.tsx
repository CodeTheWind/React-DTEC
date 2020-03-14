import React from 'react';
import './style.less';
import { Link } from 'react-router-dom';
import { AuthorDataPropsType } from '../../data';

class AuthorData extends React.Component<AuthorDataPropsType> {
  render() {
    const { userData } = this.props;
    return (
      <section className="author-info">
        <div className="title">关于作者</div>
        <div className="info-content">
          <div className="base-info">
            <div className="avatar">
              <p className="avatar-img"></p>
            </div>
            <div className="info">
              <Link to={`/user/${userData.ids}`}>{userData.username}</Link>
              <p className="motto alone-ellipsis">{userData.motto || '作者暂时没有个性签名...'}</p>
            </div>
          </div>
        </div>
        <div className="about-author">
          <p><i className="iconfont icon-like"></i> 文章获赞 365</p>
          <p><i className="iconfont icon-view"></i> 文章被阅读 15505</p>
        </div>
      </section>
    )
  }
}

export default AuthorData;