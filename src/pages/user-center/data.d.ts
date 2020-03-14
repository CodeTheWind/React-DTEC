
export interface ParamsType {
  ids: string;
}

export interface UserCenterStateType {
  userData: userDataType;
  articleList: any[];
  owner: boolean;
}

interface userDataType {
  ids: string;
  username: string;
  avatar: string;
  motto: string;
  profession: string;
  company: string;
}