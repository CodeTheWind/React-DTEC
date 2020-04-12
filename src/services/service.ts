import { request } from "./request";


/**
 * 获取banner列表
 */
export function getBannerList() {
  return request.get('/img/get/banner', {});
}