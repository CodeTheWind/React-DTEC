import React, { ReactPropTypes } from 'react';
import { Breadcrumb, Table, Popconfirm, message, Button, Modal, Input, Card } from 'antd';
import { LoginParamsType } from '../../../services/user/data';
import { isPhone } from '../../home-page/utils';
import { register } from '../../../services/user/service';
import { getUserList, deleteObject } from '../../../services/admin/service';
import { GetUserListPramasType, DelObjectParamsType } from '../../../services/admin/data';
import { UserType } from '../../data';

export interface IState {
  userList: UserType[];
  loading: boolean;
  visible: boolean;
  selectedDataIds: number[] | string[];
  pagination: any;
  tel: string;
  password: string;
}

const { Search } = Input;

class UserList extends React.Component<ReactPropTypes, IState> {

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

  private params: GetUserListPramasType = {
    page: 1,
    keyword: '',
  }

  state = {
    userList: [],
    loading: true,
    visible: false,
    selectedDataIds: [],
    pagination: {
      total: 0,
      current: 1,
    },
    tel: '',
    password: '',
  }

  componentDidMount = () => {
    this.getUserList();
  }

  /**
   * 获取用户数据
   */
  getUserList = () => {
    getUserList(this.params).then((res: any) => {
      let { userList, pagination } = this.state;
      userList = res.data;
      pagination.total = res.total;
      this.setState({ userList, pagination, loading: false });
    })
  }

  /**
   * 删除用户
   */
  delUsers = (params: DelObjectParamsType) => {
    deleteObject(params, 'user').then((res: any) => {
      if (res.state === 200) {
        message.success('删除成功！', 2);
        this.getUserList();
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
   * 分页
   */
  hanleTableChange = (pagination: any): void => {
    this.params.page = pagination.current;
    this.getUserList();
  }

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
  onChangeTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ tel: e.target.value });
  }

  /**
   * 新增用户 - 密码
   */
  onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  }

  /**
   * 新增用户
   */
  onConfirmAddUser = () => {
    const params: LoginParamsType = {
      tel: this.state.tel,
      password: this.state.password,
    };
    if (isPhone(params.tel)) {
      register(params).then((res: any) => {
        if (res.state === 0) {
          message.success('新增成功！', 1.5, () => {
            this.setState({ visible: false, tel: '', password: '' });
            this.getUserList();
          });
        } else {
          message.error(res.msg);
        }
      })
    } else {
      message.error('手机号格式错误！');
    }
  }

  /**
   * 搜索用户
   */
  onSearchUser = (value: string) => {
    this.params = {
      page: 1,
      keyword: value
    };
    this.getUserList();
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

        <Card className="action-card">
          <div className="row">
            <span>搜索用户：</span>
            <Search
              placeholder="手机号/用户名"
              onSearch={value => this.onSearchUser(value)}
              style={{ width: 220, marginLeft: 5 }}
            />
            <Button type="primary" onClick={this.onOpenModal} style={{ float: 'right' }}>新增用户</Button>
          </div>
        </Card>

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
          </div>
          <Table
            rowSelection={rowSelection}
            columns={this.columns}
            dataSource={this.state.userList}
            rowKey={record => record._id}
            loading={this.state.loading}
            pagination={this.state.pagination}
            onChange={this.hanleTableChange}
            size="middle"
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