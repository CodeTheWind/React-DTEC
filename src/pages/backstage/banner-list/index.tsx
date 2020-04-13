import React, { ReactPropTypes } from 'react';
import Upload from './components/upload';
import ImgCard from './components/img-card';
import { Breadcrumb, message } from 'antd';
import { uploadBanner, deleteObject, addBanner } from '../../../services/admin/service';
import { getBannerList } from '../../../services/service';
import { BannerType } from '../../data';

interface IState {
  bannerList: BannerType[];
}

class BannerList extends React.Component<ReactPropTypes, IState> {

  state = {
    bannerList: [],
  }

  componentDidMount = () => {
    this.getBannerList();
  }

  /**
   * 获取banner列表
   */
  getBannerList = () => {
    getBannerList().then(res => {
      this.setState({ bannerList: res.data });
    })
  }

  /**
   * 删除banner图
   */
  onDeleteCurrentImg = (ids: string) => {
    const params = { ids };
    deleteObject(params, 'banner').then((res: any) => {
      if (res.state === 200) {
        message.success('删除成功！', 2);
        this.getBannerList();
      } else {
        message.error(res.msg);
      }
    })
  }

  /**
   * 上传图片
   */
  upload = (img: any) => {
    const formdata = new FormData();
    formdata.append('file', img);

    uploadBanner(formdata).then((res: any) => {
      if (res.state === 200) {
        const params = { name: res.data.name, path: res.data.path };
        addBanner(params).then((res: any) => {
          if (res.state === 200) {
            message.success('上传成功！', 2);
            this.getBannerList();
          }
        })
      } else {
        message.error(res.msg);
      }
    })
  }

  render() {
    const { bannerList } = this.state;

    return (
      <>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>封面图设置</Breadcrumb.Item>
        </Breadcrumb>

        <div className="card">
          {bannerList.map((item: BannerType) => (
            <ImgCard
              key={item.path}
              src={item.path}
              onDelete={() => this.onDeleteCurrentImg(item._id)} />
          ))}
          {
            bannerList.length < 5 && <Upload uploadBanner={this.upload} />
          }
        </div>
      </>
    )
  }
}

export default BannerList;