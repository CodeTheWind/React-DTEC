import { request } from '../request';
import {
  LoginParamsType,
  GetUserDataParamsType,
  UpdateDataParamsType,
  UpdateAvatarParamsType,
  UpdatePasswordParamsType,
} from './data';

/**
 * 登录
 */
const login = (params: LoginParamsType) => {
  return request.post('/user/login', params);
}

/**
 * 注册
 */
const register = (params: LoginParamsType) => {
  return request.post('/user/register', params);
}

/**
 * 退出
 */
const logout = () => {
  return request.post('/user/logout', {});
}

/**
 * 获取当前登录人的信息
 */
const getPersonalData = () => {
  return request.get('/user/get/personaldata', {});
}

/**
 * 获取用户资料
 */
const getUserData = (params: GetUserDataParamsType) => {
  return request.get('/user/get/data', params);
}

/**
 * 修改个人基本资料
 */
const updateUserData = (params: UpdateDataParamsType) => {
  return request.post('/user/update/data', params);
}

/**
 * 修改头像
 */
const updateAvatar = (params: UpdateAvatarParamsType) => {
  return request.post('/user/update/avatar', params);
}

/**
 * 修改密码
 */
const updatePassword = (params: UpdatePasswordParamsType) => {
  return request.post('/user/update/password', params);
}

/**
 * 上传头像
 */
const uploadAvatar = (params: any) => {
  return request.filePost('/img/upload', params);
}

export {
  login,
  register,
  logout,
  getPersonalData,
  getUserData,
  updatePassword,
  updateAvatar,
  updateUserData,
  uploadAvatar,
}