import React from 'react';
import ReactQuill from 'react-quill'; // ES6
import TypeRadio from '../post-article/components/TypeRadio';
import { Button, Modal, message } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';
import { getArticleDetails, updateArticle } from '../../services/article/service';
import { getCategoryList } from '../../services/category/service';
import 'react-quill/dist/quill.snow.css';
import '../post-article/style.less';
import { IState } from './data';
import { AddArticleParamsType } from '../../services/article/data';
import { CategoryType } from '../data';

class EditArticle extends React.Component<RouteComponentProps<any>, IState> {

  constructor(props: RouteComponentProps<any>) {
    super(props);
    this.state = {
      categoryIds: '',
      categoryList: [],
      articleData: {
        _id: '',
        title: '',
        des: '',
        content: '',
        category: {
          _id: '',
          typeId: '',
          typeName: '',
        },
        tags: [],
      },

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
      this.setState({ articleData: data, categoryIds: data.category._id });
    });

    //获取分类选项
    getCategoryList().then((res: any) => {
      this.setState({ categoryList: res.data });
    })
  }

  /**
   * 标题、简述、标签、分类、富文本内容
   */
  onHandleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { articleData } = this.state;
    articleData.title = e.target.value;
    this.setState({ articleData });
  }
  onHandleDes = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let { articleData } = this.state;
    articleData.des = e.target.value;
    this.setState({ articleData });
  }
  onHandleTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { articleData } = this.state;
    articleData.tags = e.target.value.split(' ');
    this.setState({ articleData });
  }
  getTypeValue = (ids: string) => {
    this.setState({ categoryIds: ids });
  }
  onHandleContent = (value: string) => {
    let { articleData } = this.state;
    articleData.content = value;
    this.setState({ articleData });
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
    const { articleData, categoryIds } = this.state;

    const params: AddArticleParamsType = {
      title: articleData.title,
      des: articleData.des,
      content: articleData.content,
      category: categoryIds,
      tags: articleData.tags,
      ids: articleData._id,
    }

    this.setState({ confirmLoading: true });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      }, () => {
        updateArticle(params).then((res: any) => {
          if (res.state === 200) {
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
    const { articleData } = this.state;
    return (
      <main className="main">
        <div className="title">
          <div className="input-title">
            <input type="text"
              placeholder="输入文章标题..."
              value={articleData.title}
              onChange={this.onHandleTitle}
            />
          </div>
          <div className="action-bar">
            <Link to={`/user/${articleData.author}`}>返回个人中心</Link>
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
                {this.state.categoryList.map((item: CategoryType) => (
                  <TypeRadio
                    key={item.typeId}
                    ids={item._id}
                    defaultChecked={item.typeId === articleData.category.typeId ? true : false}
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
                  value={articleData.tags.join(' ')}
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
            value={articleData.des}
          ></textarea>
        </div>
        <ReactQuill
          placeholder="输入文章内容..."
          value={articleData.content}
          onChange={this.onHandleContent}
        />
      </main>
    )
  }
}

export default EditArticle;