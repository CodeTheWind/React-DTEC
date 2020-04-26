import { ArticleType, UserType, CollectionType, CategoryType } from "../data";

/*************** 个人中心接口约束 ****************/
export interface IState {
  userData: UserType;
  articleList: ArticleDataType[];
  collectionList: CollectionType[];
  owner: boolean;
  panel: string;
}

export interface ArticleDataType extends ArticleType {
  _id: string;
  category: CategoryType;
  operation: boolean;
}

interface CollectionArticleDataType extends ArticleType {
  _id: string;
  category: CategoryType;
  author: UserType;
}

export interface CollectionType {
  _id: string;
  user: string;
  article: CollectionArticleDataType;
}