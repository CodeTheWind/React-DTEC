export interface GetUserListPramasType {
  page: number;
  keyword: string;
}

export interface DelObjectParamsType {
  ids: string[];
}

export interface AddCategoryParamsType {
  typeId: string;
  typeName: string;
}

export interface AddBannerParamsType {
  path: string;
  name: string;
}