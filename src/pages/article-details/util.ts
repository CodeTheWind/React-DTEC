import { ArticleItemType } from "../home-page/data";

/**
 * 将当前作者发布的文章进行处理
 * @param articleList 作者发布的所有文章
 * @param currentArticleIds 当前文章的ids
 */
export function getAuthorOtherArticles(articleList: ArticleItemType[], currentArticleIds: string) {
  let newArticleList: ArticleItemType[] = [];
  const COUNT: number = 7;

  articleList.forEach((item: ArticleItemType) => {
    if (item.ids !== currentArticleIds) {
      newArticleList.push(item);
    }
  })

  if (newArticleList.length > COUNT) {
    newArticleList.splice(COUNT);
  }

  return newArticleList;
}
