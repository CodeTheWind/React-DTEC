export interface ArticleDataType {
  _id: string;
  title: string;
  date: string;
  des: string;
  category: string;
  likes: number;
  comments?: [];
  operation?: boolean;
}

export interface ArticleListParamsType {
  page: number;
  typeId: number;
  keyword: string;
}

export interface UserDataType {
  _id: string;
  username: string;
  avatar: string;
  motto: string;
}

export interface BannerDataType {
  _id: string;
  name: string;
  path: string;
}