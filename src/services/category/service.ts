import { request } from '../request';

/**
 * 获取分类列表
 */
const getCategoryList = () => {
  return request.get('/category/list', {});
}

export {
  getCategoryList,
}