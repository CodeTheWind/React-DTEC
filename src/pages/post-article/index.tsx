import React from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import './style.less';
import { Button, Modal, message } from 'antd';
import TypeRadio from './components/TypeRadio';
import { Link } from 'react-router-dom';

import { getCategoryList } from '../../services/category/service';
import { addArticle } from '../../services/article/service';

class PostArticle extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      ids: '',
      title: '',
      des: '',
      content: '',
      category: '',
      tags: [],
      categoryList: [],
      visible: false,
      confirmLoading: false,
    }
    this.onHandleTitle = this.onHandleTitle.bind(this)
    this.onHandleDes = this.onHandleDes.bind(this)
    this.onHandleContent = this.onHandleContent.bind(this)
    this.onHandleTag = this.onHandleTag.bind(this)
  }

  componentDidMount() {
    getCategoryList().then((res: any) => {
      this.setState({
        ids: this.props.match.params.ids,
        categoryList: res.data
      });
    })
  }

  /**
   * 标题、简述、标签、分类、富文本内容
   */
  onHandleTitle = (e: any) => {
    this.setState({ title: e.target.value });
  }
  onHandleDes = (e: any) => {
    this.setState({ des: e.target.value });
  }
  onHandleTag = (e: any) => {
    const tag: string = e.target.value;
    const tags: string[] = tag.split(' ');
    this.setState({ tags });
  }
  getTypeValue = (ids: string) => {
    this.setState({ category: ids });
  }
  onHandleContent = (value: string) => {
    this.setState({ content: value });
  }

  /**
   * 打开Model弹窗
   */
  showModel = () => {
    this.setState({ visible: true });
  }

  /**
   * 关闭Model弹窗
   */
  handleCancel = () => {
    this.setState({ visible: false });
  }

  /**
   * 发布文章
   */
  handleOk = () => {
    const { ids, title, des, content, category, tags } = this.state;
    const params = { ids, title, des, content, category, tags };

    this.setState({ confirmLoading: true });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      }, () => {
        addArticle(params).then((res: any) => {
          if (res.state === 200) {
            message.success('发布成功！', 1.5, () => {
              this.props.history.push(`/article/${res.articleIds}`);
            })
          } else {
            message.error(res.msg);
          }
        })
      });
    }, 1500);
  };

  render() {
    return (
      <main className="main">
        <div className="title">
          <div className="input-title">
            <input type="text"
              placeholder="输入文章标题..."
              value={this.state.title}
              onChange={this.onHandleTitle}
            />
          </div>
          <div className="action-bar">
            <Link to="/">返回首页</Link>
            <Button type="primary" onClick={this.showModel}>发布</Button>
            <Modal
              title="发布文章"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              confirmLoading={this.state.confirmLoading}
              okText="发布"
              cancelText="取消"
            >
              <div className="row">
                <h3>分类</h3>
                {this.state.categoryList.map((item: any) => (
                  <TypeRadio
                    key={item._id}
                    id={item._id}
                    value={item.typeName}
                    name="分类"
                    getTypeValue={this.getTypeValue}
                  />
                ))}
              </div>
              <div className="row">
                <h3>标签</h3>
                <input type="text"
                  placeholder="添加一个或多个标签（多个标签用空格分隔）"
                  value={this.state.tag}
                  onChange={this.onHandleTag}
                />
              </div>
            </Modal>
          </div>
        </div>
        <div className="des">
          <textarea
            placeholder="输入文章简述..."
            onChange={this.onHandleDes}
            value={this.state.des}
          ></textarea>
        </div>
        <ReactQuill
          placeholder="输入文章内容..."
          value={this.state.content}
          onChange={this.onHandleContent}
        />
      </main>
    )
  }
}

export default PostArticle;