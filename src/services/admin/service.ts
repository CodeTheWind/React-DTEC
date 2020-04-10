import { request } from '../request';
import { GetUserListPramasType } from './data';

/**
 * 获取用户列表
 */
const getUserList = (params: GetUserListPramasType) => {
  return request.get('/admin/get/userlist', params);
}

/**
 * 添加分类
 */
const addCategory = (params: any) => {
  return request.post('/admin/add/category', params);
}

/**
 * 删除对象
 */
const deleteObject = (params: any, objectName: string) => {
  return request.post(`/admin/delete/${objectName}`, params);
}

export {
  getUserList,
  addCategory,
  deleteObject,
}