import { request } from '../request';
import { GetUserListPramasType, AddCategoryParamsType, AddBannerParamsType } from './data';
import { AxiosResponse } from 'axios';

/**
 * 获取用户列表
 */
const getUserList = (params: GetUserListPramasType): Promise<AxiosResponse<any>> => {
  return request.get('/admin/get/userlist', params);
}

/**
 * 添加分类
 */
const addCategory = (params: AddCategoryParamsType): Promise<AxiosResponse<any>> => {
  return request.post('/admin/add/category', params);
}

/**
 * 删除对象
 */
const deleteObject = (params: any, objectName: string): Promise<AxiosResponse<any>> => {
  return request.post(`/admin/delete/${objectName}`, params);
}

/**
 * 上传banner图到服务器
 */
const uploadBanner = (params: any): Promise<AxiosResponse<any>> => {
  return request.filePost('/img/upload/banner', params);
}

/**
 * 添加banner图
 */
const addBanner = (params: AddBannerParamsType): Promise<AxiosResponse<any>> => {
  return request.post('/admin/add/banner', params);
}

export {
  getUserList,
  addCategory,
  deleteObject,
  uploadBanner,
  addBanner,
}