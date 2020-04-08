import React from 'react';
import { Breadcrumb, Table, Popconfirm, message, Button, Modal, Input } from 'antd';
import { getUserList, deleteObject } from '../../service';
import { DelObjectParamsType } from '../../data';
import { UserLoginParamsType } from '../../../home-page/data';
import { isPhone } from '../../../home-page/util';
import { userRegister } from '../../../home-page/service';
import '../../_mock';

class UserList extends React.Component {

  // 表列项
  private columns = [
    {
      title: '_id',
      dataIndex: '_id',
      key: '_id',
      width: 350,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '手机号',
      dataIndex: 'tel',
      key: 'tel',
    },
    {
      title: '创建时间',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
    {
      title: '操作',
      key: 'action',
      render: (text: any, record: any) => (
        <span>
          <Popconfirm
            title={`你确定要删除 “${record.username}” 吗？`}
            onConfirm={() => this.onConfirmDelOne(record._id)}
            okText="确定"
            cancelText="取消"
          >
            <a href="/">删除</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  state = {
    loading: true,
    visible: false,
    selectedDataIds: [],
    userData: [],
    tel: '',
    password: '',
  }

  componentDidMount = () => {
    this.getUserData();
  }

  /**
   * 获取用户数据
   */
  getUserData = () => {
    getUserList().then((res: any) => {
      this.setState({ userData: res.data, loading: false });
    })
  }

  /**
   * 删除用户
   */
  delUsers = (params: DelObjectParamsType) => {
    deleteObject(params, 'user').then((res: any) => {
      if (res.state === 200) {
        message.success('删除成功！', 2);
        this.getUserData();
      } else {
        message.error(res.msg);
      }
    })
  }

  /**
   * 确认删除用户 - 单项
   */
  onConfirmDelOne = (ids: string) => {
    const params: DelObjectParamsType = { ids: [ids] };
    this.delUsers(params);
  }
  /**
   * 确认删除用户 - 批量
   */
  onConfirmDelMany = () => {
    const params: DelObjectParamsType = { ids: this.state.selectedDataIds };
    this.delUsers(params);
  }

  /**
   * 选择要操作的数据
   */
  onSelectChange = (selectedDataIds: number[] | string[]) => {
    this.setState({ selectedDataIds });
  };

  /**
   * 打开新增用户弹窗
   */
  onOpenModal = () => {
    this.setState({
      visible: true,
    });
  }

  /**
   * 关闭新增用户弹窗
   */
  onCloseModal = () => {
    this.setState({
      visible: false,
      tel: '',
      password: ''
    });
  }

  /**
   * 新增用户 - 手机号
   */
  onChangeTel = (e: any) => {
    this.setState({ tel: e.target.value });
  }

  /**
   * 新增用户 - 密码
   */
  onChangePassword = (e: any) => {
    this.setState({ password: e.target.value });
  }

  /**
   * 新增用户
   */
  onConfirmAddUser = () => {
    const params: UserLoginParamsType = {
      tel: this.state.tel,
      password: this.state.password,
    };
    if (isPhone(params.tel)) {
      userRegister(params).then((res: any) => {
        if (res.state === 0) {
          message.success('新增成功！', 1.5, () => {
            this.setState({ visible: false, tel: '', password: '' });
            this.getUserData();
          });
        } else {
          message.error(res.msg);
        }
      })
    } else {
      message.error('手机号格式错误！');
    }
  }

  render() {
    const { selectedDataIds } = this.state;
    const rowSelection = {
      selectedDataIds,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedDataIds.length > 0;

    return (
      <>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>对象管理</Breadcrumb.Item>
          <Breadcrumb.Item>用户管理</Breadcrumb.Item>
        </Breadcrumb>

        <div className="card">
          <div className="row">
            {
              hasSelected ?
                <Popconfirm
                  title={`你确定要删除这些数据吗？`}
                  onConfirm={() => this.onConfirmDelMany()}
                  okText="确定"
                  cancelText="取消"
                >
                  <Button type="primary" disabled={!hasSelected}>批量删除</Button>
                </Popconfirm> :
                <Button type="primary" disabled={!hasSelected}>批量删除</Button>
            }
            <Button type="primary" onClick={this.onOpenModal}>新增用户</Button>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={this.columns}
            dataSource={this.state.userData}
            rowKey={record => record._id}
            size="middle"
            loading={this.state.loading}
          />
          <Modal
            title="新增用户"
            visible={this.state.visible}
            onOk={this.onConfirmAddUser}
            onCancel={this.onCloseModal}
            okText="确认"
            cancelText="取消"
            centered
            destroyOnClose
          >
            <div style={{ padding: '0 20%' }}>
              <Input placeholder="输入用户手机号" allowClear onChange={this.onChangeTel} />
              <br />
              <br />
              <Input placeholder="输入密码" allowClear onChange={this.onChangePassword} />
            </div>
          </Modal>
        </div>
      </>
    )
  }
}

export default UserList;