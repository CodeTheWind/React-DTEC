import React from 'react';
import './style.less';

class Exception extends React.Component<any> {
  backHome = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <main className="page-404">
        <button className="back-home" onClick={this.backHome}>返回首页</button>
      </main>
    )
  }
}

export default Exception;