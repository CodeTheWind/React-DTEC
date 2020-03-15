import React from 'react';
import { EditProfilePropsType } from '../../data';

const avatar = require('../../../../assets/avatar.jpg');

class EditProfile extends React.Component<EditProfilePropsType, any> {
  /**
   * 保存
   */
  onSaveProfile = () => {
    const params = this.props.profile;
    this.props.onSaveProfile(params);
  }

  render() {
    const { profile } = this.props;

    return (
      <div className="card">
        <h2>个人资料</h2>
        <div className="row first-row">
          <div className="label">头像</div>
          <div className="input">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
            <div className="action">
              <p>支持 jpg、png 格式大小 5M 以内的图片</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="label">用户名</div>
          <div className="input">
            <input type="text"
              placeholder="填写你的用户名"
              value={profile.username}
              onChange={(e) => this.props.setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="label">职位</div>
          <div className="input">
            <input type="text"
              placeholder="填写你的职业"
              value={profile.profession}
              onChange={(e) => this.props.setProfession(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="label">公司</div>
          <div className="input">
            <input type="text"
              placeholder="填写你的公司"
              value={profile.company}
              onChange={(e) => this.props.setCompany(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="label">个人介绍</div>
          <div className="input">
            <input type="text"
              placeholder="填写职业技能、擅长的事情、喜欢的事情"
              value={profile.motto}
              onChange={(e) => this.props.setMotto(e.target.value)}
            />
          </div>
        </div>
        <button className="save" onClick={this.onSaveProfile}>保存</button>
      </div>
    )
  }
}

export default EditProfile;