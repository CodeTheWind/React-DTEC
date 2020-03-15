import { request } from '../../server/request';
import { ProfileType, UpdatePasswordParamsType } from './data';

/**
 * 修改个人资料
 */
export function editProfile(params: ProfileType) {
  return request.post('/user/edit/profile', params);
}

/**
 * 修改密码
 */
export function updatePassword(params: UpdatePasswordParamsType) {
  return request.post('/user/edit/password', params);
}

/**
 * 上传头像
 */
export function postAvatar(params: any) {
  return request.filePost('/img/avatar', params);
}