import React from 'react';
import { EditProfilePropsType } from '../../data';
import { message } from 'antd';

const BASE_URL = "http://127.0.0.1";

class EditProfile extends React.Component<EditProfilePropsType, any> {
  constructor(props: EditProfilePropsType) {
    super(props);

    this.upLoadImg = this.upLoadImg.bind(this);
  }
  /**
   * 保存
   */
  onSaveProfile = () => {
    const params = this.props.profile;
    params.avatar = undefined;
    this.props.onSaveProfile(params);
  }

  /**
   * 上传头像
   */
  upLoadImg = (e: any) => {
    let file = e.target.files[0];

    if (file.size > 1024 * 1024 * 2) {
      message.error('图片过大， 请重新上传！', 2);
    } else {
      const formdata = new FormData();
      formdata.append('file', file);

      this.props.upLoadAvatar(formdata);
    }

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
              <img src={`${BASE_URL}${profile.avatar}`} alt="" />
            </div>
            <div className="action">
              <p>支持 jpg、png 格式大小 2M 以内的图片</p>
              <input type="file" onChange={this.upLoadImg} />
              <button className="save">点击上传</button>
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