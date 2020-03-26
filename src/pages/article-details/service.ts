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
export function likeArticle(params: ArticleDetailsParamsType) {
  return request.post('/article/like', params);
}

/**
 * 评论文章
 */
export function commentArticle(params: any) {
  return request.post('/article/comment', params);
}