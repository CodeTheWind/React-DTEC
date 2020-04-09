import React from 'react';
import { Breadcrumb } from 'antd';

class BannerList extends React.Component {
  render() {
    return (
      <>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>封面图管理</Breadcrumb.Item>
        </Breadcrumb>

        <div className="content"></div>
      </>
    )
  }
}

export default BannerList;