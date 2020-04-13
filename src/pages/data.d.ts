/**
 * 用户接口约束
 */
export interface UserType {
  _id: string;
  avatar: string;
  username: string;
  tel?: string;
  motto?: string;
  admin?: boolean;
  company?: string;
  profession?: string;
  likes?: number;
  views?: number;
}

/**
 * 分类接口约束
 */
export interface CategoryType {
  _id: string;
  typeId: string;
  typeName: string;
  creator?: string;
}

/**
 * 文章接口约束
 */
export interface ArticleType {
  title: string;
  tags: string[];
  des: string;
  _id?: string;
  date?: string;
  content?: string;
  category?: string | CategoryType;
  author?: string | UserType;
  views?: number;
  likes?: number;
}

/**
 * 评论接口约束
 */
export interface CommentType {
  _id: string;
  user: string | UserType;
  article: string;
  content: string;
  date: string;
}


/**
 * banner接口约束
 */
export interface BannerType {
  _id: string;
  name: string;
  path: string;
}