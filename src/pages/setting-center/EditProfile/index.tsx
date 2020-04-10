import React from 'react';

import { message } from 'antd';
import { EditProfilePropsType } from '../data';
import { UpdateAvatarParamsType } from '../../../services/user/data';
import { getPersonalData, uploadAvatar, updateAvatar, updateUserData } from '../../../services/user/service';

const BASE_URL = "http://127.0.0.1";

class EditProfile extends React.Component<EditProfilePropsType, any> {
  constructor(props: EditProfilePropsType) {
    super(props);
    this.state = {
      username: '',
      profession: '',
      company: '',
      motto: '',
      avatar: '',
    }

    this.upLoadImg = this.upLoadImg.bind(this);
  }

  componentDidMount = () => {
    getPersonalData().then((res: any) => {
      if (res.state !== 302) {
        this.setState({
          avatar: res.data.avatar,
          username: res.data.username,
          profession: res.data.profession,
          company: res.data.company,
          motto: res.data.motto,
        });
      }
    })
  }

  /**
   * 保存
   */
  onSaveProfile = () => {
    const { username, profession, company, motto } = this.state;
    const params = { username, profession, company, motto }

    updateUserData(params).then((res: any) => {
      if (!res.state) {
        message.success('修改成功！', 1.5);
      } else {
        message.error(res.msg, 1.5);
      }
    })
  }

  /**
   *双向绑定 用户名、职业、公司、个人简介
   */
  onHandleUsername = (e: any) => {
    this.setState({ username: e.target.value })
  }
  onHandleProfession = (e: any) => {
    this.setState({ profession: e.target.value });
  }
  onHandleCompany = (e: any) => {
    this.setState({ company: e.target.value });
  }
  onHandleMotto = (e: any) => {
    this.setState({ motto: e.target.value });
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

      uploadAvatar(formdata).then(res => {
        this.setState({ avatar: res.data.path });
        const params: UpdateAvatarParamsType = { avatar: res.data.path };
        updateAvatar(params).then((res: any) => {
          if (res.state === 200) {
            message.success('头像已更新！', 2);
          } else {
            message.error(res.msg, 2);
          }
        });
      });
    }
  }

  render() {
    const { username, profession, company, motto, avatar, } = this.state;

    return (
      <div className="card">
        <h2>个人资料</h2>
        <div className="row first-row">
          <div className="label">头像</div>
          <div className="input">
            <div className="avatar">
              <img src={`${BASE_URL}${avatar}`} alt="" />
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
              value={username}
              onChange={this.onHandleUsername}
            />
          </div>
        </div>
        <div className="row">
          <div className="label">职位</div>
          <div className="input">
            <input type="text"
              placeholder="填写你的职业"
              value={profession}
              onChange={this.onHandleProfession}
            />
          </div>
        </div>
        <div className="row">
          <div className="label">公司</div>
          <div className="input">
            <input type="text"
              placeholder="填写你的公司"
              value={company}
              onChange={this.onHandleCompany}
            />
          </div>
        </div>
        <div className="row">
          <div className="label">个人介绍</div>
          <div className="input">
            <input type="text"
              placeholder="填写职业技能、擅长的事情、喜欢的事情"
              value={motto}
              onChange={this.onHandleMotto}
            />
          </div>
        </div>
        <button className="save" onClick={this.onSaveProfile}>保存</button>
      </div>
    )
  }
}

export default EditProfile;