import { request } from '../request';
import {
  GetArticleParamsParamsType,
  GetArticleDataParamsType,
  AddCommentParamsType,
  AddArticleParamsType,
} from './data';

/**
 * 获取文章列表
 * @param params 关键字keyword、分类typeId、页码page、每页条数count
 */
const getArticleList = (params: GetArticleParamsParamsType) => {
  return request.get('/article/get/list', params);
}

/**
 * 获取特殊类型的文章列表
 * @param type 榜单类型（目前仅支持 hot、popular）
 */
const getArticleListOfType = (type: string) => {
  return request.get(`/article/get/list/${type}`, {});
}

/**
 * 获取指定用户（_id）发布过的文章列表
 * @param params 用户_id
 */
const getArticleListOfUser = (params: GetArticleDataParamsType) => {
  return request.get('/article/get/list/user', params);
}

/**
 * 获取文章详情
 * @param params 文章_id
 */
const getArticleDetails = (params: GetArticleDataParamsType) => {
  return request.get('/article/get/details', params);
}

/**
 * 获取文章评论
 * @param params 文章_id
 */
const getArticleComments = (params: GetArticleDataParamsType) => {
  return request.get('/article/get/comments', params);
}

/**
 * 评论文章
 * @param params 文章_id 、 评论内容content
 */
const addArticleComment = (params: AddCommentParamsType) => {
  return request.post('/article/add/comment', params);
}

/**
 * 点赞文章
 * @param params 文章_id
 */
const praiseArticle = (params: GetArticleDataParamsType) => {
  return request.post('/article/update/likes', params);
}

/**
 * 发表文章
 * @param params 文章字段
 */
const addArticle = (params: AddArticleParamsType) => {
  return request.post('/article/add', params);
}

/**
 * 修改文章
 * @param params 文章字段
 */
const updateArticle = (params: AddArticleParamsType) => {
  return request.post('/article/update', params);
}

/**
 * 删除文章
 * @param params 文章_id
 */
const deleteArticle = (params: GetArticleDataParamsType) => {
  return request.post('/article/delete', params);
}

export {
  getArticleList,
  getArticleListOfUser,
  getArticleListOfType,
  getArticleDetails,
  getArticleComments,
  addArticle,
  addArticleComment,
  praiseArticle,
  updateArticle,
  deleteArticle,
}