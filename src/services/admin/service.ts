import { request } from '../request';

/**
 * 获取用户列表
 */
const getUserList = () => {
  return request.get('/admin/get/userlist', {});
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