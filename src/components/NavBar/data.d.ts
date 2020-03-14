export interface NavListType {
  typeName: string;
  typeId: number;
}

export interface NavBarPropsType {
  category: NavListType[];
  onSearch: Function;
  onScreen: Function;
}

export interface NavBarStateType {
  keyword: string;
  typeId: number;
}