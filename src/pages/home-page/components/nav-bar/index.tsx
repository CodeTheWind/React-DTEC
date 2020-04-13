import React from 'react';
import './style.less';
import { CategoryType } from '../../../data';

interface NavBarPropsType {
  category: CategoryType[];
  onSearch: (keyword: string) => void;
  onScreen: (typeId: string) => void;
}

interface NavBarStateType {
  keyword: string;
  typeId: string;
}

class NavBar extends React.Component<NavBarPropsType, NavBarStateType> {

  constructor(props: NavBarPropsType) {
    super(props);
    this.state = {
      typeId: '0',
      keyword: '',
    };
    this.onHandleBindValue = this.onHandleBindValue.bind(this);
  }

  /**
   * 绑定搜索关键字
   */
  onHandleBindValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ keyword: e.target.value });
  }

  /**
   * 搜索文章
   */
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  }

  /**
   * 文章分类
   */
  onScreenCategory = (typeId: string) => {
    this.setState({ typeId }, () => {
      this.props.onScreen(typeId);
    });
  }

  render() {
    const { typeId, keyword } = this.state;
    const { category } = this.props;
    return (
      <nav className="nav">
        <div className="desc">
          <div className="container clearfix">
            <div className="logo">DETC</div>
            <div className="describle">开发者技术交流社区</div>
            <div className="search">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="搜索感兴趣的文章和内容"
                  value={keyword}
                  onChange={this.onHandleBindValue}
                />
                <button className="search-btn" onClick={this.onSearch}><i className="iconfont icon-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="container clearfix">
            <ul className="nav-list">
              {category.map((item: CategoryType) => (
                <li
                  key={item.typeId}
                  className={typeId === item.typeId ? 'active' : ''}
                  onClick={() => this.onScreenCategory(item.typeId)}
                >{item.typeName}</li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;