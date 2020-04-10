export interface BackStorageStateType {
  collapsed: boolean;
  userData: any;
}

export interface BackStoragePropsType {
  location: any;
  history: any;
}

export interface DelObjectParamsType {
  ids: string[];
}

/**
 * 文章管理state约束
 */
export interface ArticleStateProps {
  pagination: any;
  articleList: ArticleDataType[];
  selectedDataIds: string[] | number[];
}


/**
 * 文章列表约束
 */
export interface ArticleDataType {
  _id: string;
  title: string;
  des: string;
  author: string | any;
  category: string | CategoryDataType;
  date: string;
}



/**
 * 分类列表约束
 */
export interface CategoryDataType {
  _id: string;
  typeId: number | string;
  typeName: string;
  creator?: string;
}
