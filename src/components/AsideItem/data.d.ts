export interface AsideItemType {
  _id: string;
  title: string;
}

export interface AsideItemPropsType {
  title: string;
  list: AsideItemType[];
  history?: any;
}