import React from 'react';
import './style.less';

class BackTop extends React.Component {
  state = {
    isShow: false,
  };

  componentDidMount() {
    document.addEventListener('scroll', this.onIsShow);
  };

  onBackTop = () => {
    document.documentElement.scrollTop = 0;
  };

  onIsShow = () => {
    if (document.documentElement.scrollTop > 600) {
      this.setState({ isShow: true });
    } else {
      this.setState({ isShow: false });
    }
  };
  render() {
    return (
      <>
        {this.state.isShow && <div className="back-top" onClick={this.onBackTop}>
          <i className="iconfont icon-double-top"></i>
        </div>}
      </>

    )
  }
}

export default BackTop;