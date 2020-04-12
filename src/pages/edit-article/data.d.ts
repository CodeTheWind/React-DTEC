import { ArticleDataType } from '../article-details/data';
import { CategoryDataType } from '../backstage/data';

export interface EditArticleStateType extends ArticleDataType {
  ids: string;
  userIds: string;
  categoryList: CategoryDataType[],
  categoryIds: string;
  visible: boolean,
  confirmLoading: boolean,
}