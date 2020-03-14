import { request } from '../../server/request';
import { ArticleListParamsType, UserLoginParamsType } from './data';

/**
 * 获取文章分类信息
 */
export function getArticleCategory() {
  return request.get('/category/list', {});
}

/**
 * 获取文章列表
 */
export function getArticleList(params: ArticleListParamsType) {
  return request.get('/article/list', params);
}

/**
 * 获取个人资料
 */
export function getPersonalData() {
  return request.get('/user/personaldata', {});
}

/**
 * 用户登录
 */
export function userLogin(params: UserLoginParamsType) {
  return request.post('/user/login', params);
}

/**
 * 用户注册
 */
export function userRegister(params: UserLoginParamsType) {
  return request.post('/user/register', params);
}

/**
 * 退出登录
 */
export function userLogout() {
  return request.post('/user/logout', {});
}