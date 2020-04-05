import React from 'react';
import './style.less';
import { Link } from 'react-router-dom';
import { AuthorDataPropsType } from '../../data';

const BASE_URL = "http://127.0.0.1";

class AuthorData extends React.Component<AuthorDataPropsType> {
  render() {
    const { userData } = this.props;
    return (
      <section className="author-info">
        <div className="title">关于作者</div>
        <div className="info-content">
          <div className="base-info">
            <div className="avatar">
              <img src={`${BASE_URL}${userData.avatar}`} alt=""/>
            </div>
            <div className="info">
              <Link to={`/user/${userData._id}`}>{userData.username}</Link>
              <p className="motto alone-ellipsis">{userData.motto || '作者暂时没有个性签名...'}</p>
            </div>
          </div>
        </div>
        <div className="about-author">
          <p><i className="iconfont icon-like"></i> 文章获赞 {this.props.likes}</p>
          <p><i className="iconfont icon-view"></i> 文章被阅读 {this.props.views}</p>
        </div>
      </section>
    )
  }
}

export default AuthorData;