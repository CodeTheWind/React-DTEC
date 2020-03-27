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
 * 阅读排行榜
 */
Mock.mock(`${BASE_URL}/article/hotlist`, 'get', {

  "msg": "热门文章",
  "state": 0,
  "data": [
    {
      "ids": "article_c6rnbqh70jr",
      "title": "阿里前端攻城狮们写了一份前端面试题答案，请查收",
      "views": 88
    },
    {
      "ids": "article_rybzy55xc38",
      "title": "另一个作者测试",
      "views": 45
    },
    {
      "ids": "article_uyz0vounmc",
      "title": "这是刚刚修改的文章",
      "views": 30
    },
    {
      "ids": "article_zjlyxps34i",
      "title": "成为猛男后的第一篇文章",
      "views": 21
    },
    {
      "ids": "article_7sb4emlo3bx",
      "title": "11",
      "views": 12
    },
    {
      "ids": "article_irkyj84lgff",
      "title": "第二篇测试文章",
      "views": 10
    },
    {
      "ids": "article_1fxfidxtcj",
      "title": "第三篇测试文章",
      "views": 10
    }
  ]
})

/**
 * 点赞排行榜
 */
Mock.mock(`${BASE_URL}/article/popularlist`, 'get', {
  "msg": "热门文章",
  "state": 0,
  "data": [
    {
      "ids": "article_irkyj84lgff",
      "title": "第二篇测试文章",
      "likes": 2
    },
    {
      "ids": "article_c6rnbqh70jr",
      "title": "阿里前端攻城狮们写了一份前端面试题答案，请查收",
      "likes": 2
    },
    {
      "ids": "article_rybzy55xc38",
      "title": "另一个作者测试",
      "likes": 1
    },
    {
      "ids": "article_uyz0vounmc",
      "title": "这是刚刚修改的文章",
      "likes": 1
    },
    {
      "ids": "article_1fxfidxtcj",
      "title": "第三篇测试文章",
      "likes": 0
    },
    {
      "ids": "article_zjlyxps34i",
      "title": "成为猛男后的第一篇文章",
      "likes": 0
    },
    {
      "ids": "article_oqmlxiq7jr",
      "title": "测试时间",
      "likes": 0
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