import React from 'react';
import './style.less';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { editProfile } from './service';
import { EditProfileStateType } from './data';
import { message } from 'antd';
import { getPersonalData } from '../home-page/service';
import '../home-page/_mock';

const avatar = require('../../assets/avatar.jpg');

class EditProfile extends React.Component<any, EditProfileStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      profession: '',
      company: '',
      motto: '',
      avatar: '',
    }
    this.onHandleUsername = this.onHandleUsername.bind(this);
    this.onHandleProfession = this.onHandleProfession.bind(this);
    this.onHandleCompany = this.onHandleCompany.bind(this);
    this.onHandleMotto = this.onHandleMotto.bind(this);
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
   * 双向绑定 用户名、职业、公司、个人简介
   */
  onHandleUsername = (e: any) => {
    this.setState({ username: e.target.value });
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
   * 保存修改
   */
  onSaveProfile = () => {
    const params: EditProfileStateType = this.state;
    editProfile(params).then((res: any) => {
      if (!res.state) {
        message.success('修改成功！', 1.5);
      } else {
        message.error(res.msg, 1.5);
      }
    })
  }

  render() {
    return (
      <>
        <Header />
        <main className="edit-profile">
          <nav className="navbar">
            <div className="container">
              <Link to="/user/setting/profile">个人资料</Link>
              <Link to="/user/setting/password">修改密码</Link>
            </div>
          </nav>
          <section className="profile">
            <div className="container">
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
                      value={this.state.username}
                      onChange={this.onHandleUsername}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="label">职位</div>
                  <div className="input">
                    <input type="text"
                      placeholder="填写你的职业"
                      value={this.state.profession}
                      onChange={this.onHandleProfession}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="label">公司</div>
                  <div className="input">
                    <input type="text"
                      placeholder="填写你的公司"
                      value={this.state.company}
                      onChange={this.onHandleCompany}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="label">个人介绍</div>
                  <div className="input">
                    <input type="text"
                      placeholder="填写职业技能、擅长的事情、喜欢的事情"
                      value={this.state.motto}
                      onChange={this.onHandleMotto}
                    />
                  </div>
                </div>
                <button className="save" onClick={this.onSaveProfile}>保存</button>
              </div>
            </div>
          </section>
        </main>
      </>
    )
  }
}

export default EditProfile;