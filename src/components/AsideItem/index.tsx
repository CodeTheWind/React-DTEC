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
            <li className="alone-ellipsis" key={item._id}>
              <i className="iconfont icon-right"></i><Link to={`/article/${item._id}`} target="_blank" >{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AsideItem;