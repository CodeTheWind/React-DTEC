import { UserType, CategoryType, BannerType, ArticleType } from "../data";

/*************** 主页接口约束 ****************/
export interface IState {
  lphone: string;
  lpasswd: string;
  rphone: string;
  rpasswd: string;
  rcpasswd: string;
  bannerList: BannerType[];
  categoryList: CategoryType[];
  articleList: ArticleType[];
  articleHotList: ArticleType[];
  articlePopularList: ArticleType[];
  userData: UserType;
  registerWindowFlag: boolean;
  isLogin: boolean;
  hasNextPage: boolean;
}