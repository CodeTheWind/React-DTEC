export interface LoginParamsType {
  tel: string;
  password: string;
}

export interface GetUserDataParamsType {
  ids: string;
}

export interface UpdateDataParamsType {
  username: string;
  profession: string;
  company: string;
  motto: string;
}

export interface UpdateAvatarParamsType {
  avatar: string;
}

export interface UpdatePasswordParamsType {
  oldPassword: string;
  newPassword: string;
}