import { CategoryDataType } from "../../pages/backstage/data";

export interface GetArticleDataParamsType {
  ids: string;
}

export interface GetArticleListParamsType {
  keyword: string;
  page: number;
  category: string | number;
  count?: number;
}

export interface AddCommentParamsType {
  ids: string;
  content: string;
}

export interface AddArticleParamsType {
  title: string;
  tags: string[];
  category: string;
  des: string;
  content: string | undefined;
  ids: string;
}