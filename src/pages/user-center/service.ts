import { request } from '../../utils/request';
import { ParamsType } from './data';

/**
 * 获取作者资料
 */
export function getAuthorData(params: ParamsType) {
  return request.get('/user/data', params);
}

/**
 * 获取作者发布的文章列表
 */
export function getAuthorPost(params: ParamsType) {
  return request.get('/article/list/userpost', params);
}

/**
 * 删除文章
 */
export function deleteArticle(params: ParamsType) {
  return request.post('/article/delete', params);
}