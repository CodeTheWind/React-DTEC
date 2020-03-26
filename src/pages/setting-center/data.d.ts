/**
 * 导航组件
 */
export interface SettingNavPropsType {
  type: string;
}

/**
 * 修改密码组件
 */
export interface UpdatePasswordPropsType {
  onSavePassword: Function;
}

export interface UpdatePasswordStateType {
  oldPasswd: string;
  newPasswd: string;
  rNewPasswd: string;
}

export interface UpdatePasswordParamsType {
  oldPassword: string;
  newPassword: string;
}

/**
 * 编辑资料组件
 */
export interface EditProfilePropsType {
  profile: ProfileType;
  upLoadAvatar: (params: any) => void;
  setUsername: (username: string) => void;
  setProfession: (profession: string) => void;
  setCompany: (company: string) => void;
  setMotto: (motto: string) => void;
  onSaveProfile: (params: ProfileType) => void;
}

export interface ProfileType {
  avatar?: string;
  username: string;
  profession: string;
  company: string;
  motto: string;
}

export interface UpdateAvatarParamsType {
  avatar: string;
}