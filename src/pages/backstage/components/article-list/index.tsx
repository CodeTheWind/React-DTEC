import React from 'react';
import { Breadcrumb } from 'antd';

class ArticleList extends React.Component {
  componentDidMount = () => {
  }
  render() {
    return (
      <>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>对象管理</Breadcrumb.Item>
          <Breadcrumb.Item>文章管理</Breadcrumb.Item>
        </Breadcrumb>

        <div className="content"></div>
      </>
    )
  }
}

export default ArticleList;