import { request } from '../request';

/**
 * 获取分类列表
 */
export function getCategoryList() {
  return request.get('/category/list', {});
}