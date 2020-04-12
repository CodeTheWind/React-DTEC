export interface BannerListStateType {
  bannerList: BannerDataType[];
}

export interface BannerDataType {
  _id: string;
  name: string;
  path: string;
}