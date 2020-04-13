import { ArticleDataType } from "./article-list/index";

/**
 * 获取符合表格的数据源
 * @param articleList 原文章列表
 */
const getArticleListDataSource = (articleList: ArticleDataType[]): ArticleDataType[] => {
  let newArticleList: ArticleDataType[] = [];

  articleList.forEach((item: any) => {
    const newItem = JSON.parse(JSON.stringify(item));
    newItem.author = item.author.username;

    if (item.category) {
      newItem.category = item.category.typeName;
    } else {
      newItem.category = '暂无分类';
    }

    newArticleList.push(newItem);
  })

  return newArticleList;
}

export {
  getArticleListDataSource
}