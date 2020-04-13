import { ArticleType, CategoryType } from "../data";

/*************** 文章发布页接口约束 ****************/
export interface IState extends ArticleType {
  userIds: string;
  category: string;
  categoryList: CategoryType[];
  visible: boolean;
  confirmLoading: boolean;
}