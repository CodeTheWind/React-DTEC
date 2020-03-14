import React from 'react';
import './style.less';
import copy from 'copy-to-clipboard';
import { message } from 'antd';
import { SuspendedPropsType } from '../../data';

class Suspended extends React.Component<SuspendedPropsType> {
  /**
   * 点赞文章
   */
  onLikeArticle = () => {
    this.props.onLike();
  }
  /**
   * 收藏文章
   */
  onCollectArticle = () => { }
  /**
   * 分享文章，复制链接
   */
  onCopyLink = () => {
    let url = window.location.href;
    if (copy(url)) {
      message.success('复制成功,快去分享吧！');
    } else {
      message.error('复制失败，请重试！');
    }
  }
  render() {
    return (
      <div className="suspended-panel">
        <div className="suspended-item" onClick={this.onLikeArticle}>
          <i className="iconfont icon-like"></i>
        </div>
        <div className="suspended-item" onClick={this.onCollectArticle}>
          <i className="iconfont icon-collection"></i>
        </div>
        <div className="suspended-item" onClick={this.onCopyLink}>
          <i className="iconfont icon-share"></i>
        </div>
      </div>
    )
  }
}

export default Suspended;