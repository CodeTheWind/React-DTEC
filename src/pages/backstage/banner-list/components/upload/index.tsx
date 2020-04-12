import React from 'react';
import { Icon } from 'antd';
import './style.less';

interface UploadPropsType {
  uploadBanner: (file: any) => void;
}

class Upload extends React.Component<UploadPropsType> {

  /**
   * 上传banner图
   */
  onChangeUpload = (e: any) => {
    const file = e.target.files[0];
    this.props.uploadBanner(file);
  }

  render() {
    return (
      <div className="upload">
        <span className="action">
          <input type="file" title="" onChange={this.onChangeUpload} />
          <div>
            <Icon type="plus" className="plus" />
            <p>Upload</p>
          </div>
        </span>
      </div >
    )
  }
}

export default Upload;