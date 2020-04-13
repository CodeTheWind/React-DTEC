import { ArticleType, UserType } from "../data";

/*************** 个人中心接口约束 ****************/
export interface IState {
  userData: UserType;
  articleList: ArticleDataType[];
  owner: boolean;
}

export interface ArticleDataType extends ArticleType {
  _id: string;
  operation: boolean;
}