export interface ArticleDetailsParamsType {
  ids: string;
}

export interface AuthorDataPropsType {
  userData: AuthorDataType;
}

export interface SuspendedPropsType {
  onLike: Function;
}

export interface AuthorDataType {
  ids: string;
  username: string;
  motto: string;
}