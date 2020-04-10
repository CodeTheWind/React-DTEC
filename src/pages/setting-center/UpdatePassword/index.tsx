import React from 'react';
import { UpdatePasswordPropsType, UpdatePasswordStateType, UpdatePasswordParamsType } from '../data';
import { message } from 'antd';
import { updatePassword } from '../../../services/user/service';

class UpdatePassword extends React.Component<UpdatePasswordPropsType, UpdatePasswordStateType> {
  constructor(props: UpdatePasswordPropsType) {
    super(props);
    this.state = {
      oldPasswd: '',
      newPasswd: '',
      rNewPasswd: '',
    }
    this.onHandleOldPasswd = this.onHandleOldPasswd.bind(this);
    this.onHandleNewPasswd = this.onHandleNewPasswd.bind(this);
    this.onHandleRNewPasswd = this.onHandleRNewPasswd.bind(this);
  }

  /**
   * 双向绑定
   */
  onHandleOldPasswd = (e: any) => {
    this.setState({ oldPasswd: e.target.value });
  }
  onHandleNewPasswd = (e: any) => {
    this.setState({ newPasswd: e.target.value });
  }
  onHandleRNewPasswd = (e: any) => {
    this.setState({ rNewPasswd: e.target.value });
  }

  /**
   * 保存修改
   */
  onSavePassword = () => {
    const { oldPasswd, newPasswd, rNewPasswd } = this.state;
    if (newPasswd !== rNewPasswd) {
      message.error('两次输入的新密码不一致！', 2);
    } else {
      const params: UpdatePasswordParamsType = {
        oldPassword: oldPasswd,
        newPassword: newPasswd,
      };
      updatePassword(params).then((res: any) => {
        if (!res.state) {
          message.success('修改成功', 2);
        } else {
          message.error(res.msg, 2);
        }
      })
    }
  }

  render() {
    return (
      <div className="card">
        <h2>修改密码</h2>
        <div className="row">
          <div className="label">原密码</div>
          <div className="input">
            <input type="password"
              placeholder="请输入原密码"
              value={this.state.oldPasswd}
              onChange={this.onHandleOldPasswd}
            />
          </div>
        </div>
        <div className="row">
          <div className="label">新密码</div>
          <div className="input">
            <input type="password"
              placeholder="请输入新密码"
              value={this.state.newPasswd}
              onChange={this.onHandleNewPasswd}
            />
          </div>
        </div>
        <div className="row">
          <div className="label">确认新密码</div>
          <div className="input">
            <input type="password"
              placeholder="确认新密码"
              value={this.state.rNewPasswd}
              onChange={this.onHandleRNewPasswd}
            />
          </div>
        </div>
        <button className="save" onClick={this.onSavePassword}>保存</button>
      </div>
    )
  }
}

export default UpdatePassword;