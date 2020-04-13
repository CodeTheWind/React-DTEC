import { ArticleDataType } from '../article-details/data';
import { CategoryDataType } from '../backstage/data';
import { ArticleType, CategoryType } from '../data';

/*************** 修改文章页接口约束 ****************/
interface ArticleDataType extends ArticleType {
  category: CategoryType;
}

export interface IState {
  categoryIds: string;
  articleData: ArticleDataType;
  categoryList: CategoryType[];
  visible: boolean;
  confirmLoading: boolean;
}
