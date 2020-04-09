import React from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import '../post-article/style.less';
import { Button, Modal, message } from 'antd';
import TypeRadio from '../post-article/components/TypeRadio';
import { updateArticle } from './service';
import { Link } from 'react-router-dom';

import { getArticleDetails } from '../../services/article/service';
import { getCategoryList } from '../../services/category/service';




class EditArticle extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      userIds: '',
      _id: '',
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
    const { params } = this.props.match;
    // 获取文章详情
    getArticleDetails(params).then((res: any) => {

      const { data } = res;

      this.setState({
        _id: data._id,
        title: data.title,
        des: data.des,
        content: data.content,
        tags: data.tags,
        category: data.category,
      });
    });

    //获取分类选项
    getCategoryList().then((res: any) => {
      this.setState({ categoryList: res.data });
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
    this.setState({ tags: e.target.value.split(' ') });
  }
  getTypeValue = (id: string, name: string) => {
    this.setState({
      typeId: id,
      typeName: name
    });
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
   * 修改文章
   */
  handleOk = () => {
    const { userIds, ids, title, des, content, category, tags } = this.state;
    const params = { userIds, ids, title, des, content, category, tags };

    this.setState({ confirmLoading: true });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      }, () => {
        updateArticle(params).then((res: any) => {
          if (!res.state) {
            message.success('修改成功！', 1.5, () => {
              this.props.history.push(`/article/${res.ids}`);
            })
          } else {
            message.error(res.msg);
          }
        })
      });
    }, 1500);
  };

  render() {
    const tags = this.state.tags.join(' ');
 
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
            <Link to={`/user/${this.state.userIds}`}>返回个人中心</Link>
            <Button type="primary" onClick={this.showModel}>确认修改</Button>
            <Modal
              title="修改文章"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              confirmLoading={this.state.confirmLoading}
              okText="确认"
              cancelText="取消"
            >
              <div className="row">
                <h3>分类</h3>
                {this.state.categoryList.map((item: any) => (
                  <TypeRadio
                    key={item.typeId}
                    id={item.typeId}
                    defaultChecked={item.typeId === this.state.typeId ? true : false}
                    value={item.typeName}
                    name="分类"
                    getTypeValue={this.getTypeValue}
                  />
                ))}
              </div>
              <div className="row">
                <h3>标签</h3>
                <input type="text"
                  placeholder="添加一个或多个标签（多个标签之间用空格隔开）"
                  value={tags}
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

export default EditArticle;