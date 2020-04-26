import React, { ReactPropTypes } from 'react';
import { Breadcrumb, Popconfirm, Table, Button, message, Divider, Tag, Card, Input } from 'antd';
import { deleteObject } from '../../../services/admin/service';
import { GetArticleListParamsType } from '../../../services/article/data';
import { getArticleList } from '../../../services/article/service';
import { getArticleListDataSource } from '../utils';
import { Link } from 'react-router-dom';
import { ColumnProps } from 'antd/es/table';
import { ArticleType } from '../../data';
import { DelObjectParamsType } from '../../../services/admin/data';

export interface ArticleDataType extends ArticleType {
  _id: string;
}

interface IState {
  articleList: ArticleDataType[];
  selectedDataIds: string[] | number[];
  pagination: any;
}

const { Search } = Input;

class ArticleList extends React.Component<ReactPropTypes, IState> {
  // 表列项
  private columns: ColumnProps<ArticleDataType>[] = [
    {
      title: '_id',
      dataIndex: '_id',
      key: '_id',
      width: 250,
    },
    {
      title: '文章标题',
      dataIndex: 'title',
      key: 'title',
      width: 400,
      ellipsis: true,
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      width: 150,
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      width: 300,
      ellipsis: true,
      render: (tags: []) => (
        <span>
          {
            tags.length > 0 ?
              tags.map((tag: string, index: number) => {
                let color = (index % 2 === 0) ? 'geekblue' : 'green';
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              }) :
              <Tag>暂无</Tag>
          }
        </span>
      ),
    },
    {
      title: '阅读量',
      dataIndex: 'views',
      key: 'views',
      width: 120,
    },
    {
      title: '获赞数',
      dataIndex: 'likes',
      key: 'likes',
      width: 120,
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
      width: 250,
      ellipsis: true,
    },
    {
      title: '发表时间',
      dataIndex: 'date',
      key: 'date',
      width: 300,
      ellipsis: true,
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      render: (text: any, record: any) => (
        <span>
          <Link to={`/article/${record._id}`} target="_blank">查看</Link>
          <Divider type="vertical" />
          <Popconfirm
            title={`你确定要删除这篇文章吗？`}
            onConfirm={() => this.onConfirmDelOne(record._id)}
            okText="确定"
            cancelText="取消"
          >
            <a href="/">删除</a>
          </Popconfirm>
        </span>
      ),

    },
  ]

  private params: GetArticleListParamsType = {
    page: 1,
    category: '0',
    keyword: '',
  }

  state = {
    articleList: [],
    selectedDataIds: [],
    pagination: {
      total: 0
    },
  }

  componentDidMount = () => {
    this.getArticleList();
  }

  /**
   * 获取文章列表
   */
  getArticleList = () => {
    getArticleList(this.params).then((res: any) => {
      let { articleList, pagination } = this.state;
      articleList = res.data;
      pagination.total = res.total;
      this.setState({ articleList, pagination });
    });
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
  hanleTableChange = (pagination: any) => {
    this.params.page = pagination.current;
    this.getArticleList();
  }

  /**
   * 搜索文章
   */
  onSearchArticle = (value: string): void => {
    this.params = {
      page: 1,
      keyword: value,
      category: '0',
    };
    this.getArticleList();
  }

  /**
   * 删除文章
   */
  delArticle = (params: DelObjectParamsType) => {
    deleteObject(params, 'article').then((res: any) => {
      if (res.state === 200) {
        message.success('删除成功！', 2);
        this.getArticleList();
      } else {
        message.error(res.msg);
      }
    })
  }

  /**
   * 确认删除文章 - 单项
   */
  onConfirmDelOne = (ids: string) => {
    const params: DelObjectParamsType = { ids: [ids] };
    this.delArticle(params);
  }

  /**
   * 确认删除文章 - 批量
   */
  onConfirmDelMany = () => {
    const params: DelObjectParamsType = { ids: this.state.selectedDataIds };
    this.delArticle(params);
  }

  render() {
    const { pagination, selectedDataIds } = this.state;
    const rowSelection = {
      selectedDataIds,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedDataIds.length > 0;
    const articleList: ArticleDataType[] = getArticleListDataSource(this.state.articleList);

    return (
      <>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>对象管理</Breadcrumb.Item>
          <Breadcrumb.Item>文章管理</Breadcrumb.Item>
        </Breadcrumb>

        <Card className="action-card">
          <div className="row">
            <span>搜索文章：</span>
            <Search
              placeholder="标题"
              onSearch={value => this.onSearchArticle(value)}
              style={{ width: 220, marginLeft: 5 }}
            />
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
            scroll={{ x: 2000 }}
            rowSelection={rowSelection}
            columns={this.columns}
            dataSource={articleList}
            rowKey={record => record._id}
            pagination={pagination}
            onChange={this.hanleTableChange}
            size="middle"
          />
        </div>
      </>
    )
  }
}

export default ArticleList;