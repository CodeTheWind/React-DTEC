import React from 'react';
import { Icon } from 'antd';
import './style.less';

interface ImgCardPropsType {
  src: string;
  onDelete: () => void;
}

class ImgCard extends React.Component<ImgCardPropsType> {

  /**
   * 删除图片
   */
  onDeleteImg = () => {
    this.props.onDelete();
  }

  render() {
    const { src } = this.props;
    return (
      <div className="img-card">
        <div className="preview">
          <img src={`http://127.0.0.1${src}`} alt="" />
          <div className="mask">
            <Icon type="eye" title="预览大图" />
            <Icon type="delete" title="删除图片" onClick={this.onDeleteImg} />
          </div>
        </div>
      </div>
    )
  }
}

export default ImgCard;