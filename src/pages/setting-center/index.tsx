import React from 'react';
import './style.less';
import Header from '../../components/Header';
import SettingNav from './components/SetingNav';
import EditProfile from './components/EditProfile';
import UpdatePassword from './components/UpdatePassword';
import { postAvatar, editProfile, updatePassword, editAvatar } from './service';
import { getPersonalData } from '../home-page/service';
import { ProfileType, UpdatePasswordParamsType, UpdateAvatarParamsType } from './data';
import { message } from 'antd';
import '../home-page/_mock';

class SettingCenter extends React.Component<any, ProfileType> {
  state = {
    username: '',
    profession: '',
    company: '',
    motto: '',
    avatar: '',
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
  onHandleUsername = (username: string) => {
    this.setState({ username })
  }
  onHandleProfession = (profession: string) => {
    this.setState({ profession });
  }
  onHandleCompany = (company: string) => {
    this.setState({ company });
  }
  onHandleMotto = (motto: string) => {
    this.setState({ motto });
  }

  /**
   * 上传头像并修改
   */
  upLoadImg = (params: any) => {
    postAvatar(params).then(res => {
      this.setState({ avatar: res.data.path });
      const params: UpdateAvatarParamsType = { avatar: res.data.path };
      editAvatar(params).then((res: any) => {
        if (res.state === 200) {
          message.success('修改成功！', 2);
        } else {
          message.error(res.msg, 2);
        }
      });
    });
  }

  /**
   * 保存修改个人资料
   */
  onSaveProfile = (params: ProfileType) => {
    editProfile(params).then((res: any) => {
      if (!res.state) {
        message.success('修改成功！', 1.5);
      } else {
        message.error(res.msg, 1.5);
      }
    })
  }

  /**
   * 保存修改密码
   */
  onSavePassword = (params: UpdatePasswordParamsType) => {
    updatePassword(params).then((res: any) => {
      if (!res.state) {
        message.success('修改成功', 2);
      } else {
        message.error(res.msg, 2);
      }
    })
  }

  render() {
    const profile = this.state;

    const type = this.props.match.params.type;
    let component = null;
    switch (type) {
      case 'profile':
        component = <EditProfile
          upLoadAvatar={this.upLoadImg}
          setUsername={this.onHandleUsername}
          setProfession={this.onHandleProfession}
          setCompany={this.onHandleCompany}
          setMotto={this.onHandleMotto}
          profile={profile} onSaveProfile={this.onSaveProfile}
        />;
        break;
      case 'password':
        component = <UpdatePassword onSavePassword={this.onSavePassword} />;
        break;
    }

    return (
      <>
        <Header />
        <SettingNav type={type} />
        <main className="edit-profile">
          <div className="container">
            {component}
          </div>
        </main>
      </>
    )
  }
}

export default SettingCenter;