import React, { ReactPropTypes } from 'react';
import { Breadcrumb, Popconfirm, Table, Button, message, Divider, Modal, Input } from 'antd';
import { DelObjectParamsType, AddCategoryParamsType } from '../../../services/admin/data';
import { CategoryType } from '../../data';
import { getCategoryList } from '../../../services/category/service';
import { addCategory, deleteObject } from '../../../services/admin/service';

interface IState {
  loading: boolean;
  visible: boolean;
  typeId: string;
  typeName: string;
  selectedDataIds: string[] | number[];
  categoryList: CategoryType[];
}

class CategoryList extends React.Component<ReactPropTypes, IState> {

  // 表列项
  private columns = [
    {
      title: '_id',
      dataIndex: '_id',
      key: '_id',
      width: 350,
    },
    {
      title: '分类名称',
      dataIndex: 'typeName',
      key: 'typeName',
      width: 200,
    },
    {
      title: '分类id',
      dataIndex: 'typeId',
      key: 'typeId',
      width: 200,
    },
    {
      title: '创建者',
      dataIndex: 'creator',
      key: 'creator',
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
          <span className="op">编辑</span>
          <Divider type="vertical" />
          <Popconfirm
            title={`你确定要删除 “${record.typeName}” 分类吗？`}
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
    typeId: '',
    typeName: '',
    selectedDataIds: [],
    categoryList: [],
  }

  componentDidMount = () => {
    this.getCategoryList();
  }

  /**
   * 获取分类列表
   */
  getCategoryList = () => {
    getCategoryList().then((res: any) => {
      this.setState({ categoryList: res.data, loading: false });
    })
  }

  /**
   * 删除分类
   */
  delCategories = (params: DelObjectParamsType) => {
    deleteObject(params, 'category').then((res: any) => {
      if (res.state === 200) {
        message.success('删除成功！', 2);
        this.getCategoryList();
      } else {
        message.error(res.msg);
      }
    })
  }

  /**
   * 选择要操作的数据
   */
  onSelectChange = (selectedDataIds: number[] | string[]) => {
    this.setState({ selectedDataIds });
  };

  /**
 * 打开新增分类弹窗
 */
  onOpenModal = () => {
    this.setState({
      visible: true,
    });
  }

  /**
   * 关闭新增分类弹窗
   */
  onCloseModal = () => {
    this.setState({
      visible: false,
      typeId: '',
      typeName: '',
    });
  }

  /**
   * 确认删除分类 - 单项
   */
  onConfirmDelOne = (ids: string) => {
    const params: DelObjectParamsType = { ids: [ids] };
    this.delCategories(params);
  }

  /**
   * 确认删除分类 - 批量
   */
  onConfirmDelMany = () => {
    const params: DelObjectParamsType = { ids: this.state.selectedDataIds };
    this.delCategories(params);
  }

  /**
   * 新增分类 - 分类id
   */
  onChangeTypeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ typeId: e.target.value });
  }

  /**
   * 新增分类 - 名称
   */
  onChangeTypeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ typeName: e.target.value });
  }

  /**
   * 新增分类
   */
  onConfirmAddCategory = () => {
    const params: AddCategoryParamsType = { typeId: this.state.typeId, typeName: this.state.typeName };
    addCategory(params).then((res: any) => {
      if (res.state === 200) {
        message.success('添加成功！', 1.5, () => {
          this.setState({ visible: false, typeId: '', typeName: '' });
          this.getCategoryList();
        });
      } else {
        message.error(res.msg);
      }
    })
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
          <Breadcrumb.Item>分类管理</Breadcrumb.Item>
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
            <Button type="primary" onClick={this.onOpenModal}>新增分类</Button>
          </div>

          <Table
            rowSelection={rowSelection}
            columns={this.columns}
            dataSource={this.state.categoryList}
            rowKey={record => record._id}
            size="middle"
            loading={this.state.loading}
          />
          <Modal
            title="新增分类"
            visible={this.state.visible}
            onOk={this.onConfirmAddCategory}
            onCancel={this.onCloseModal}
            okText="确认"
            cancelText="取消"
            centered
            destroyOnClose
          >
            <div style={{ padding: '0 20%' }}>
              <Input placeholder="输入分类ID" allowClear onChange={this.onChangeTypeId} />
              <br />
              <br />
              <Input placeholder="输入分类名称" allowClear onChange={this.onChangeTypeName} />
            </div>
          </Modal>
        </div>
      </>
    )
  }
}

export default CategoryList;