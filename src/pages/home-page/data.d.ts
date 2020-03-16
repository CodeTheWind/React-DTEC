export interface ArticleItemType {
  ids: string;
  title: string;
  date: string;
  des: string;
  typeName: string;
  likes: number;
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
  ids: string;
  avatar: string;
  motto: string;
}