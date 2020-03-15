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
  setUsername: Function;
  setProfession: Function;
  setCompany: Function;
  setMotto: Function;
  onSaveProfile: Function;
}

export interface ProfileType {
  avatar: string;
  username: string;
  profession: string;
  company: string;
  motto: string;
}




