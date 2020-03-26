import Mock from 'mockjs';

const BASE_URL = 'http://127.0.0.1:3000'

/**
 * 用户信息
 */
Mock.mock(`${BASE_URL}/user/data?ids=user_lheyk2ocqxe`, 'get', {
  "msg": "dtec_9h4mjf4wb87",
  "state": 0,
  "data": {
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
  },
  "owner": true
})

/**
 * 用户发布的文章
 */
Mock.mock(`${BASE_URL}/article/list/userpost?ids=user_lheyk2ocqxe`, 'get', {
  "state": 0,
  "likes": 199,
  "views": 2999,
  "data": [
    {
      "ids": "article_23cch5biicl",
      "views": 1,
      "likes": 0,
      "_id": "5e6a5a3eefa5dd4f6c3aa36d",
      "title": "第一篇测试文章",
      "typeName": "前端",
      "userIds": "user_lheyk2ocqxe",
      "date": "2020-03-12T15:50:22.083Z",
      "__v": 0,
      "des": "测试简述"
    },
    {
      "ids": "article_irkyj84lgff",
      "views": 2,
      "likes": 0,
      "_id": "5e6a5b4e3ef0570260980baf",
      "title": "第二篇测试文章",
      "des": "测试简述",
      "typeName": "后台",
      "userIds": "user_lheyk2ocqxe",
      "date": "2020-03-12T15:54:54.793Z",
      "__v": 0
    },
    {
      "ids": "article_1fxfidxtcj",
      "views": 6,
      "likes": 0,
      "_id": "5e6a616e7aa1942d94edc531",
      "title": "第三篇测试文章",
      "des": "测试",
      "typeName": "网络安全",
      "userIds": "user_lheyk2ocqxe",
      "date": "2020-03-12T16:21:02.478Z",
      "__v": 0
    },
    {
      "ids": "article_bv058cyt0yg",
      "views": 3,
      "likes": 1,
      "_id": "5e6b2b51f08b1d29480e6de8",
      "title": "测试发布的文章",
      "des": "测试发布文章的简述",
      "typeName": "前端",
      "userIds": "user_lheyk2ocqxe",
      "date": "2020-03-13T06:42:25.324Z",
      "__v": 0
    }
  ]
})