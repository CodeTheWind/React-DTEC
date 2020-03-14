import React from 'react';
import './style.less';
import { AsideItemType, AsideItemPropsType } from './data';
import { Link } from 'react-router-dom';

class AsideItem extends React.Component<AsideItemPropsType> {
  render() {
    const { list, title } = this.props;

    return (
      <div className="hot-item">
        <div className="title">{title}</div>
        <ul className="list">
          {list.map((item: AsideItemType) => (
            <li key={item.id}>
              <i className="iconfont icon-right"></i><Link to={`/article/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AsideItem;