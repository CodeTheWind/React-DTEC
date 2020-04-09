import { request } from '../../services/request';
import { DelObjectParamsType } from './data';

/**
 * 获取用户列表
 */
export function getUserList() {
  return request.get('/admin/userlist', {});
}

/**
 * 获取分类列表
 */
export function getCategoryList() {
  return request.get('/category/list', {});
}

/**
 * 新增分类
 */
export function newCategory(params: any) {
  return request.post('/admin/addcategory', params);
}

/**
 * 删除对象
 */
export function deleteObject(params: DelObjectParamsType, objectName: string) {
  return request.post(`/admin/delete/${objectName}`, params);
}