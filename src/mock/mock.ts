import Mock from 'mockjs';

const BASE_URL = 'http://127.0.0.1:3000';



/**
 * 文章模块
 */

// 文章列表
Mock.mock(`${BASE_URL}/article/list?page=1&typeId=0&keyword=`, 'get', {

});





/**
 * 分类模块
 */





/**
 * 用户模块
 */

//  获取当前登录人的信息
Mock.mock(`${BASE_URL}/user/personaldata`, 'get', {
  "msg": "阿宇不会前端啊",
  "state": 0,
  "data": {
    "avatar": "/img/avatar/avatar_wsyxxqqp6nl.jpg",
    "sex": "保密",
    "motto": "阿里巴巴首席架构师",
    "profession": "前端实习生",
    "company": "阿里巴巴",
    "admin": true,
    "_id": "5e675a60ea0bf43770597926",
    "username": "阿宇不会前端啊",
    "password": "336498",
    "tel": "13628032230",
    "createdDate": "2020-03-12 15:30:22",
    "__v": 0
  }
});