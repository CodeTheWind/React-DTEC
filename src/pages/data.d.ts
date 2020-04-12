/**
 * 用户接口约束
 */
export interface UserType {
  _id: string;
  tel: string;
  motto: string;
  avatar: string;
  username: string;
  company: string;
  profession: string;
  admin?: boolean;
}

/**
 * 分类接口约束
 */
export interface CategoryType {
  _id: string;
  typeId: number | string;
  typeName: string;
  creator?: string;
}

/**
 * 文章接口约束
 */
export interface ArticleType {
  _id: string;
  title: string;
  category: string;
  tags: string[];
  des: string;
  date: string;
  content?: string;
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