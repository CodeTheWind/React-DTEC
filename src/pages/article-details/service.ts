import { request } from '../../server/request';
import { ArticleDetailsParamsType } from './data';

/**
 * 获取文章详情
 */
export function getArticleDetails(params: ArticleDetailsParamsType) {
  return request.get('/article/details', params);
}

/**
 * 点赞文章
 */
export function onLikeArticle(params: ArticleDetailsParamsType) {
  return request.post('/article/like', params);
}