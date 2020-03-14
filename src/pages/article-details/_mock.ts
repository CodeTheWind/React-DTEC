import Mock from 'mockjs';

const BASE_URL = 'http://127.0.0.1:3000'

/**
 * 文章详情
 */
Mock.mock(`${BASE_URL}/article/details?ids=article_1fxfidxtcj`, 'get', {
  "msg": "文章详情",
  "state": 0,
  "articleData": {
    "ids": "article_1fxfidxtcj",
    "views": 2,
    "likes": 0,
    "_id": "5e6a616e7aa1942d94edc531",
    "title": "第三篇测试文章",
    "des": "测试",
    "content": "<h2>啦啦啦啦阿联</h2><p><br></p><p>测试</p>",
    "typeId": 1003,
    "typeName": "网络安全",
    "tag": "测试3",
    "userIds": "user_lheyk2ocqxe",
    "date": "2020-03-12T16:21:02.478Z",
    "__v": 0
  },
  "userData": {
    "ids": "user_lheyk2ocqxe",
    "username": "dtec_9h4mjf4wb87",
    "sex": "保密",
    "motto": "",
    "profession": "",
    "company": "",
    "_id": "5e675a60ea0bf43770597926",
    "tel": "13628032230",
    "createdDate": "2020-03-10T09:14:08.114Z",
    "__v": 0
  }
});