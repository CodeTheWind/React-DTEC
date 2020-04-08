import { request } from '../../utils/request';

/**
 * 发表文章
 */
export function postArticle(params: any) {
  return request.post('/article/post', params);
}

/**
 * 获取文章分类信息
 */
export function getArticleCategory() {
  return request.get('/category/list', {});
}