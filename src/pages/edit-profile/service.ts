import { request } from '../../server/request';
import { EditProfileStateType } from './data';

/**
 * 修改个人资料
 */
export function editProfile(params: EditProfileStateType) {
  return request.post('/user/edit', params);
}

/**
 * 上传头像
 */
export function postAvatar(params: any) {
  return request.filePost('/img/avatar', params);
}