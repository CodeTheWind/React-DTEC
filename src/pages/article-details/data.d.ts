import { ArticleType, CommentType, UserType } from '../data';

/*************** 详情页接口约束 ****************/

/**
 * state接口约束
 */ 
export interface IState {
  articleData: ArticleType;
  commentList: CommentType[];
  authorOthers: ArticleType[];
  authorAchievement: UserType;
  articleHotList: ArticleType[];
  userAvatar: string;
  comment: string;
  submitFlag: boolean;
  isLogin: boolean;
}

/**
 * 用户信息组件props接口约束
 */
export interface AuthorDataPropsType {
  userData: UserType;
}

/**
 * 悬浮操作组件props接口约束
 */
export interface SuspendedPropsType {
  onLike: () => void;
}