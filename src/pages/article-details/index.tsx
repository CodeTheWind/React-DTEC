import React from 'react';
import './style.less';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AsideItem from '../../components/AsideItem';
import Suspended from './components/Suspended';
import AuthorData from './components/AuthorData';
import { AsideItemType } from '../../components/AsideItem/data';
import { getArticleDetails, onLikeArticle } from './service';
import { message } from 'antd';
import './_mock';

/**
 * 热点列表 
 */
const HOT_ITEM1: AsideItemType[] = [
  { id: 'sakk21lks', title: '文章1' },
  { id: 'asfcadqwv', title: '文章2' },
  { id: 'laskdoi2k', title: '文章3' },
  { id: 'c9djqk3j3', title: '文章4' },
  { id: 'as39kjjid', title: '文章5' },
  { id: 'sakalo1ks', title: '文章6' },
  { id: 'aalao21la', title: '文章7' },
];

class ArticleDetails extends React.Component<any, any> {
  state = {
    articleData: {
      title: '',
      des: '',
      content: '',
      date: '',
      views: 0,
    },
    userData: {
      username: '',
      ids: '',
      motto: '',
    },
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { params } = this.props.match;
    getArticleDetails(params).then((res: any) => {
      if (res.state === 404) {
        this.props.history.push('/exception/404');
      } else {
        this.setState({
          articleData: res.articleData,
          userData: res.userData
        })
      }
    })
  }

  /**
   * 点赞文章
   */
  onLikesArticle = () => {
    const { params } = this.props.match;
    onLikeArticle(params).then((res: any) => {
      if (!res.state) {
        message.success(res.msg, 1.5);
      } else {
        message.error(res.msg, 1.5);
      }
    })
  }

  render() {
    const { articleData, userData } = this.state;

    return (
      <>
        <Header />
        <main className="container article-details">
          <article>
            <h1>{articleData.title}</h1>
            <div className="article-info">
              <span>发布于 {articleData.date}</span>
              <span>阅读 {articleData.views}</span>
            </div>
            <div className="article"
              dangerouslySetInnerHTML={{ __html: articleData.content }}
            ></div>
            <Suspended onLike={this.onLikesArticle} />
          </article>
          <aside>
            <AuthorData userData={userData} />
            <AsideItem title="本周排行" list={HOT_ITEM1} />
            <AsideItem title="猜你喜欢" list={HOT_ITEM1} />
          </aside>
        </main>
        <Footer />
      </>
    )
  }
};

export default ArticleDetails;