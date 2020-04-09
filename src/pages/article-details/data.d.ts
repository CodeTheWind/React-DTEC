interface ArticleType {
  _id: string;
  title: string;
  des: string;
  tags: string[];
  category: any;
  content: string;
  date: string;
  views: number;
  author: AuthorDataType;
}

export interface ArticleDetailsStateType {
  articleData: ArticleType;
  authorOthers: any[];
  articleHotList: any[];
  likes: number;
  views: number;
  userAvatar: string;
  comment: string;
  submitFlag: boolean;
  isLogin: boolean;
  commentList: any[];
}

export interface ArticleCommentType {
  avatar: string;
  username: string;
  content: string;
  date: string;
}

export interface ArticleDetailsParamsType {
  ids: string;
}

export interface AuthorDataPropsType {
  userData: AuthorDataType;
  likes: number;
  views: number;
}

export interface SuspendedPropsType {
  onLike: () => void;
}

export interface AuthorDataType {
  _id: string;
  avatar: string;
  username: string;
  motto: string;
}