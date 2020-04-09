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
export function login(params: LoginParamsType) {
  return request.post('/user/login', params);
}

/**
 * 注册
 */
export function register(params: LoginParamsType) {
  return request.post('/user/register', params);
}

/**
 * 退出
 */
export function logout() {
  return request.post('/user/logout', {});
}

/**
 * 获取当前登录人的信息
 */
export function getPersonalData() {
  return request.get('/user/get/personaldata', {});
}

/**
 * 获取用户资料
 */
export function getUserData(params: GetUserDataParamsType) {
  return request.get('/user/get/data', params);
}

/**
 * 修改个人基本资料
 */
export function updateUserData(params: UpdateDataParamsType) {
  return request.get('/user/update/data', params);
}

/**
 * 修改头像
 */
export function updateAvatar(params: UpdateAvatarParamsType) {
  return request.get('/user/update/avatar', params);
}

/**
 * 修改密码
 */
function updatePassword(params: UpdatePasswordParamsType) {
  return request.get('/user/update/password', params);
}

/**
 * 上传头像
 */
function uploadAvatar(params: any) {
  return request.filePost('/img/upload', params);
}

export {
  uploadAvatar, updatePassword
}