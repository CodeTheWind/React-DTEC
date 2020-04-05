export interface ArticleItemType {
  _id: string;
  title: string;
  date: string;
  des: string;
  typeName: string;
  likes: number;
  comments?: [];
  operation?: boolean;
}

export interface ArticleListParamsType {
  page: number;
  typeId: number;
  keyword: string;
}

export interface UserLoginParamsType {
  tel: string;
  password: string;
}

export interface UserDataType {
  username: string;
  _id: string;
  avatar: string;
  motto: string;
}