interface ArticleType {
  ids?: string;
  title: string;
  des: string;
  content: string;
  comments: ArticleCommentType[];
  date: string;
  views: number;
}

export interface ArticleDetailsStateType {
  articleData: ArticleType;
  authorData: any;
  authorOthers: any[];
  articleHotList: any[];
  likes: number;
  views: number;
  userAvatar: string;
  comment: string;
  submitFlag: boolean;
  isLogin: boolean;
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
  ids: string;
  avatar: string;
  username: string;
  motto: string;
}