import React from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import './style.less';
import { Button, Modal, message } from 'antd';
import TypeRadio from './components/TypeRadio';
import { postArticle } from './service';
import { getArticleCategory } from '../home-page/service';
import { Link } from 'react-router-dom';

class PostArticle extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      userIds: '',
      title: '',
      des: '',
      content: '',
      typeId: '',
      typeName: '',
      tag: '',
      typeList: [],
      visible: false,
      confirmLoading: false,
    }
    this.onHandleTitle = this.onHandleTitle.bind(this)
    this.onHandleDes = this.onHandleDes.bind(this)
    this.onHandleContent = this.onHandleContent.bind(this)
    this.onHandleTag = this.onHandleTag.bind(this)
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
    this.setState({ tag: e.target.value });
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
   * 发布文章
   */
  handleOk = () => {
    const { userIds, title, des, content, typeId, typeName, tag } = this.state;
    const params = { userIds, title, des, content, typeId, typeName, tag };

    this.setState({ confirmLoading: true });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 1500);

    postArticle(params).then((res: any) => {
      if (!res.state) {
        message.success('发布成功！', 1.5, () => {
          this.props.history.push(`/article/${res.articleIds}`);
        })
      } else {
        message.error(res.msg);
      }
    })
  };

  componentDidMount() {
    getArticleCategory().then((res: any) => {
      this.setState({
        userIds: this.props.match.params.ids,
        typeList: res.data
      });
    })
  }

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
                {this.state.typeList.map((item: any) => (
                  <TypeRadio
                    key={item.typeId}
                    id={item.typeId}
                    value={item.typeName}
                    name="分类"
                    getTypeValue={this.getTypeValue}
                  />
                ))}
              </div>
              <div className="row">
                <h3>标签</h3>
                <input type="text"
                  placeholder="添加一个标签"
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