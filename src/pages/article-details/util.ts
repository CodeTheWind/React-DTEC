import { ArticleItemType } from "../home-page/data";

/**
 * 将当前作者发布的文章进行处理
 * @param articleList 作者发布的所有文章
 * @param currentArticleIds 当前文章的ids
 */
export function getAuthorOtherArticles(articleList: ArticleItemType[], currentArticleIds: string) {
  let newArticleList: ArticleItemType[] = [];

  articleList.forEach((item: ArticleItemType) => {
    if (item.ids !== currentArticleIds) {
      newArticleList.push(item);
    }
  })

  if (newArticleList.length > 10) {
    newArticleList.splice(10);
  }

  return newArticleList;
}
