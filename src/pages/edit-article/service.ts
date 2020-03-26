import { request } from '../../server/request';

/**
 * 修改文章
 */
export function updateArticle(params: any) {
  return request.post('/article/update', params);
}

/**
 * 获取文章分类信息
 */
export function getArticleCategory() {
  return request.get('/category/list', {});
}