import Mock from 'mockjs';

const BASE_URL = 'http://127.0.0.1:3000'

/**
 * 分类列表
 */
Mock.mock(`${BASE_URL}/category/list`, 'get', {
  "msg": "分类列表",
  "state": 0,
  "data": [
    {
      "_id": "5e6a55a0cf380000e4005807",
      "typeId": 1001,
      "typeName": "前端"
    },
    {
      "_id": "5e6a55b0cf380000e4005808",
      "typeId": 1002,
      "typeName": "后台"
    },
    {
      "_id": "5e6a55cbcf380000e4005809",
      "typeId": 1003,
      "typeName": "网络安全"
    }
  ]
})

/**
 * 全部文章列表
 */
Mock.mock(`${BASE_URL}/article/list?page=1&typeId=0&keyword=`, 'get', {
  "msg": "文章列表",
  "state": 0,
  "data": [
    {
      "ids": "article_1fxfidxtcj",
      "title": "第三篇测试文章",
      "des": "测试",
      "date": "2020-03-12T16:21:02.478Z"
    },
    {
      "ids": "article_irkyj84lgff",
      "title": "第二篇测试文章",
      "des": "测试简述",
      "date": "2020-03-12T15:54:54.793Z"
    },
    {
      "ids": "article_23cch5biicl",
      "title": "第一篇测试文章",
      "des": "测试简述",
      "date": "2020-03-12T15:50:22.083Z"
    }
  ]
})

/**
 * 登录状态下的个人信息
 */
Mock.mock(`${BASE_URL}/user/personaldata`, 'get', {
  "msg": "dtec_9h4mjf4wb87",
  "state": 0,
  "data": {
    "avatar": 'http://127.0.0.1:8000/img/avatar/default.png',
    "ids": "user_lheyk2ocqxe",
    "username": "dtec_9h4mjf4wb87",
    "sex": "保密",
    "motto": "",
    "profession": "",
    "company": "",
    "_id": "5e675a60ea0bf43770597926",
    "password": "336498",
    "tel": "13628032230",
    "createdDate": "2020-03-10T09:14:08.114Z",
    "__v": 0
  }
})