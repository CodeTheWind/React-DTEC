import Mock from 'mockjs';

const BASE_URL = 'http://127.0.0.1:3000';

Mock.mock(`${BASE_URL}/`, 'get');



/**
 * 分类模块
 */

// 分类列表
Mock.mock(`${BASE_URL}/category/list`, 'get', {
  "msg": "分类列表",
  "state": 0,
  "data": [
    {
      "_id": "5e8dea689ab5e03540871397",
      "typeId": "1001",
      "typeName": "前端",
      "createdDate": "2020-04-08 23:14:48",
      "creator": "阿宇不会前端啊",
      "__v": 0
    },
    {
      "_id": "5e8dedacd507443e805a337c",
      "typeId": "1002",
      "typeName": "后台",
      "createdDate": "2020-04-08 23:28:44",
      "creator": "阿宇不会前端啊",
      "__v": 0
    },
    {
      "_id": "5e8df2b29c313e4b404150c8",
      "typeId": "1003",
      "typeName": "网络安全",
      "createdDate": "2020-04-08 23:50:10",
      "creator": "阿宇不会前端啊",
      "__v": 0
    },
    {
      "_id": "5e8df31a9c313e4b404150c9",
      "typeId": "1004",
      "typeName": "人工智能",
      "createdDate": "2020-04-08 23:51:54",
      "creator": "胡亚娟",
      "__v": 0
    }
  ]
})



/**
 * banner图模块
 */

// banner图列表
Mock.mock(`${BASE_URL}/img/get/banner`, 'get', {
  "msg": "封面图列表",
  "state": 200,
  "data": [
    {
      "_id": "5e92f1a503f2da42101da325",
      "name": "banner_g984lroj1q.jpg",
      "path": "/img/banner/banner_g984lroj1q.jpg",
      "__v": 0
    },
    {
      "_id": "5e92f333fcd4e44b60ee196f",
      "name": "banner_a2whuyst7h.jpg",
      "path": "/img/banner/banner_a2whuyst7h.jpg",
      "__v": 0
    },
    {
      "_id": "5e92f346fcd4e44b60ee1970",
      "name": "banner_3lnn0geh5uz.jpg",
      "path": "/img/banner/banner_3lnn0geh5uz.jpg",
      "__v": 0
    },
    {
      "_id": "5e92f373fcd4e44b60ee1971",
      "name": "banner_lvvqpkmq4qg.jpg",
      "path": "/img/banner/banner_lvvqpkmq4qg.jpg",
      "__v": 0
    }
  ]
});




/**
 * 文章模块
 */

// 文章列表 - 基本
Mock.mock(`${BASE_URL}/article/get/list?page=1&typeId=0&keyword=`, 'get', {
  "msg": "全部文章列表",
  "state": 0,
  "data": [
    {
      "tags": [
        "JavaScript",
        "前端"
      ],
      "views": 23,
      "likes": 0,
      "_id": "5e8f56f947846539905ccbda",
      "title": "重新前端",
      "des": "灵魂质问？到底什么是js\n1111",
      "category": {
        "_id": "5e8dedacd507443e805a337c",
        "typeId": "1002",
        "typeName": "后台"
      },
      "date": "2020-04-10 01:10:17",
      "author": {
        "_id": "5e675a60ea0bf43770597926",
        "username": "阿宇不会前端啊"
      },
      "__v": 0
    },
    {
      "tags": [
        "测试",
        "新的",
        "修改"
      ],
      "views": 11,
      "likes": 0,
      "_id": "5e8f3b30a83e0e1ad8164275",
      "title": "23：09测试   ----   修改",
      "des": "水水水水水水水水水水水水水水水水水水水",
      "category": {
        "_id": "5e8df2b29c313e4b404150c8",
        "typeId": "1003",
        "typeName": "网络安全"
      },
      "date": "2020-04-09 23:11:44",
      "author": {
        "_id": "5e675a60ea0bf43770597926",
        "username": "阿宇不会前端啊"
      },
      "__v": 1
    },
    {
      "tags": [
        "测试"
      ],
      "views": 34,
      "likes": 0,
      "_id": "5e8eb2cad305190d28749505",
      "title": "评论的文章",
      "des": "林伟",
      "category": {
        "_id": "5e8df31a9c313e4b404150c9",
        "typeId": "1004",
        "typeName": "人工智能"
      },
      "date": "2020-04-09 13:29:46",
      "author": {
        "_id": "5e675a60ea0bf43770597926",
        "username": "阿宇不会前端啊"
      },
      "__v": 0
    },
    {
      "tags": [
        "测试",
        "大号"
      ],
      "views": 7,
      "likes": 0,
      "_id": "5e8e97011f4c204980d6c828",
      "comments": [],
      "title": "修改后测测试",
      "des": "测试",
      "category": {
        "_id": "5e8df31a9c313e4b404150c9",
        "typeId": "1004",
        "typeName": "人工智能"
      },
      "date": "2020-04-09 11:31:13",
      "author": {
        "_id": "5e675a60ea0bf43770597926",
        "username": "阿宇不会前端啊"
      },
      "__v": 0
    },
    {
      "tags": [],
      "views": 4,
      "likes": 0,
      "_id": "5e8dfe2bf894ad143859c49e",
      "comments": [],
      "title": "1111111111111111111",
      "des": "1111111111111111111111111111111111",
      "date": "2020-04-09 00:39:07",
      "author": {
        "_id": "5e675a60ea0bf43770597926",
        "username": "阿宇不会前端啊"
      },
      "__v": 0
    },
    {
      "tags": [],
      "views": 2,
      "likes": 0,
      "_id": "5e8dfdfdf894ad143859c49d",
      "comments": [],
      "title": "11",
      "des": "111",
      "date": "2020-04-09 00:38:21",
      "author": {
        "_id": "5e675a60ea0bf43770597926",
        "username": "阿宇不会前端啊"
      },
      "__v": 0
    },
    {
      "tags": [],
      "views": 18,
      "likes": 0,
      "_id": "5e8df561993fa537d8005914",
      "comments": [],
      "title": "关联作者",
      "des": "关联作者测试",
      "date": "2020-04-09 00:01:37",
      "author": {
        "_id": "5e6908b3c371241144d4035f",
        "username": "胡亚娟"
      },
      "__v": 0
    },
    {
      "tags": [],
      "views": 11,
      "likes": 1,
      "_id": "5e89fb39c5f69d3d944e6e42",
      "comments": [],
      "date": "2020-04-05 23:34:25",
      "title": "ceshi",
      "des": "sss",
      "__v": 0,
      "author": {
        "_id": "5e675a60ea0bf43770597926",
        "username": "阿宇不会前端啊"
      }
    },
    {
      "tags": [],
      "views": 25,
      "likes": 0,
      "_id": "5e7dd7129e9d9d3a3023d2db",
      "comments": [],
      "date": "2020-03-27 17:53:16",
      "title": "你真的了解你JS的对象吗？- 重学前端（二)",
      "des": "书接上文，开始重学前端(第二篇)",
      "__v": 1,
      "category": {
        "_id": "5e8df31a9c313e4b404150c9",
        "typeId": "1004",
        "typeName": "人工智能"
      },
      "author": {
        "_id": "5e675a60ea0bf43770597926",
        "username": "阿宇不会前端啊"
      }
    },
    {
      "tags": [],
      "views": 16,
      "likes": 4,
      "_id": "5e7dd4189e9d9d3a3023d2da",
      "comments": [],
      "date": "2020-03-27 17:53:16",
      "title": "在家办公之 - 重学前端（一）",
      "des": "在家办公已有两周，家里幽静，适合悟道，想想入行三年多，每天在每天都在疲于技术的追求，去学习各种框架，库，却不知，他们都是脱胎于JavaScript，虽然感觉自己每天都在学习，但最终发现却只是工作中的实践和平时零散的学习，虽觉得自己都什么都知道点皮毛。却终不得章法，于是在去年的面试试炼中所有问题暴露无遗。\n",
      "__v": 1,
      "category": {
        "_id": "5e8df31a9c313e4b404150c9",
        "typeId": "1004",
        "typeName": "人工智能"
      },
      "author": {
        "_id": "5e675a60ea0bf43770597926",
        "username": "阿宇不会前端啊"
      }
    }
  ]
});

// 文章列表 - 阅读量排行榜
Mock.mock(`${BASE_URL}/article/get/list/hot`, 'get', {
  "msg": "最热文章",
  "state": 200,
  "data": [
    {
      "tags": [],
      "views": 93,
      "likes": 2,
      "_id": "5e77165bdbf5bd31987a8185",
      "date": "2020-03-22 15:33:07",
      "title": "阿里前端攻城狮们写了一份前端面试题答案，请查收",
      "des": "话说一周前，我发了这样一条沸点：\n于是我真的就建群收集了题目，和团队的同事一起写答案，我们也不图什么，就是想做一件有意义的事情，现在我整理了下我们的回答，有的不一定就是非常具体的回答，但也提供了思路和参考资料，大家看看是否还有什么补充的，或者面试时遇到的问题，也欢迎补充",
      "__v": 4,
      "comments": [],
      "author": "5e675a60ea0bf43770597926"
    },
    {
      "tags": [],
      "views": 46,
      "likes": 1,
      "_id": "5e6b3adc40a29b4cc8b797be",
      "title": "另一个作者测试",
      "des": "小号测试简述",
      "date": "Fri Mar 13 2020 15:48:44 GMT+0800 (GMT+08:00)",
      "__v": 1,
      "comments": [],
      "author": "5e6908b3c371241144d4035f"
    },
    {
      "tags": [],
      "views": 24,
      "likes": 0,
      "_id": "5e7dd7129e9d9d3a3023d2db",
      "comments": [],
      "date": "2020-03-27 17:53:16",
      "title": "你真的了解你JS的对象吗？- 重学前端（二)",
      "des": "书接上文，开始重学前端(第二篇)",
      "__v": 0,
      "author": "5e675a60ea0bf43770597926"
    },
    {
      "tags": [
        "测试"
      ],
      "views": 24,
      "likes": 0,
      "_id": "5e8eb2cad305190d28749505",
      "title": "评论的文章",
      "des": "林伟",
      "category": "5e8df31a9c313e4b404150c9",
      "date": "2020-04-09 13:29:46",
      "author": "5e675a60ea0bf43770597926",
      "__v": 0
    },
    {
      "tags": [],
      "views": 18,
      "likes": 0,
      "_id": "5e8df561993fa537d8005914",
      "comments": [],
      "title": "关联作者",
      "des": "关联作者测试",
      "date": "2020-04-09 00:01:37",
      "author": "5e6908b3c371241144d4035f",
      "__v": 0
    },
    {
      "tags": [],
      "views": 15,
      "likes": 4,
      "_id": "5e7dd4189e9d9d3a3023d2da",
      "comments": [],
      "date": "2020-03-27 17:53:16",
      "title": "在家办公之 - 重学前端（一）",
      "des": "在家办公已有两周，家里幽静，适合悟道，想想入行三年多，每天在每天都在疲于技术的追求，去学习各种框架，库，却不知，他们都是脱胎于JavaScript，虽然感觉自己每天都在学习，但最终发现却只是工作中的实践和平时零散的学习，虽觉得自己都什么都知道点皮毛。却终不得章法，于是在去年的面试试炼中所有问题暴露无遗。\n",
      "__v": 0,
      "author": "5e675a60ea0bf43770597926"
    },
    {
      "tags": [],
      "views": 11,
      "likes": 1,
      "_id": "5e89fb39c5f69d3d944e6e42",
      "comments": [],
      "date": "2020-04-05 23:34:25",
      "title": "ceshi",
      "des": "sss",
      "__v": 0,
      "author": "5e675a60ea0bf43770597926"
    }
  ]
});

// 文章列表 - 点赞排行榜
Mock.mock(`${BASE_URL}/article/get/list/popular`, 'get', {
  "msg": "最热文章",
  "state": 200,
  "data": [
    {
      "tags": [],
      "views": 15,
      "likes": 4,
      "_id": "5e7dd4189e9d9d3a3023d2da",
      "comments": [],
      "date": "2020-03-27 17:53:16",
      "title": "在家办公之 - 重学前端（一）",
      "des": "在家办公已有两周，家里幽静，适合悟道，想想入行三年多，每天在每天都在疲于技术的追求，去学习各种框架，库，却不知，他们都是脱胎于JavaScript，虽然感觉自己每天都在学习，但最终发现却只是工作中的实践和平时零散的学习，虽觉得自己都什么都知道点皮毛。却终不得章法，于是在去年的面试试炼中所有问题暴露无遗。\n",
      "__v": 0,
      "author": "5e675a60ea0bf43770597926"
    },
    {
      "tags": [],
      "views": 93,
      "likes": 2,
      "_id": "5e77165bdbf5bd31987a8185",
      "date": "2020-03-22 15:33:07",
      "title": "阿里前端攻城狮们写了一份前端面试题答案，请查收",
      "des": "话说一周前，我发了这样一条沸点：\n于是我真的就建群收集了题目，和团队的同事一起写答案，我们也不图什么，就是想做一件有意义的事情，现在我整理了下我们的回答，有的不一定就是非常具体的回答，但也提供了思路和参考资料，大家看看是否还有什么补充的，或者面试时遇到的问题，也欢迎补充",
      "__v": 4,
      "comments": [],
      "author": "5e675a60ea0bf43770597926"
    },
    {
      "tags": [],
      "views": 46,
      "likes": 1,
      "_id": "5e6b3adc40a29b4cc8b797be",
      "title": "另一个作者测试",
      "des": "小号测试简述",
      "date": "Fri Mar 13 2020 15:48:44 GMT+0800 (GMT+08:00)",
      "__v": 1,
      "comments": [],
      "author": "5e6908b3c371241144d4035f"
    },
    {
      "tags": [],
      "views": 11,
      "likes": 1,
      "_id": "5e89fb39c5f69d3d944e6e42",
      "comments": [],
      "date": "2020-04-05 23:34:25",
      "title": "ceshi",
      "des": "sss",
      "__v": 0,
      "author": "5e675a60ea0bf43770597926"
    },
    {
      "tags": [],
      "views": 24,
      "likes": 0,
      "_id": "5e7dd7129e9d9d3a3023d2db",
      "comments": [],
      "date": "2020-03-27 17:53:16",
      "title": "你真的了解你JS的对象吗？- 重学前端（二)",
      "des": "书接上文，开始重学前端(第二篇)",
      "__v": 0,
      "author": "5e675a60ea0bf43770597926"
    },
    {
      "tags": [],
      "views": 18,
      "likes": 0,
      "_id": "5e8df561993fa537d8005914",
      "comments": [],
      "title": "关联作者",
      "des": "关联作者测试",
      "date": "2020-04-09 00:01:37",
      "author": "5e6908b3c371241144d4035f",
      "__v": 0
    },
    {
      "tags": [],
      "views": 2,
      "likes": 0,
      "_id": "5e8dfdfdf894ad143859c49d",
      "comments": [],
      "title": "11",
      "des": "111",
      "date": "2020-04-09 00:38:21",
      "author": "5e675a60ea0bf43770597926",
      "__v": 0
    }
  ]
});

// 作者发布的其它文章
Mock.mock(`${BASE_URL}/article/get/list/user?ids=5e675a60ea0bf43770597926`, 'get', {
  "msg": "5e675a60ea0bf43770597926",
  "state": 200,
  "data": [
    {
      "tags": [
        "测试"
      ],
      "views": 27,
      "likes": 0,
      "_id": "5e8f56f947846539905ccbda",
      "title": "评论的文章",
      "des": "林伟",
      "category": "5e8df31a9c313e4b404150c9",
      "date": "2020-04-09 13:29:46",
      "author": "5e675a60ea0bf43770597926",
      "__v": 0
    },
    {
      "tags": [
        "测试",
        "大号"
      ],
      "views": 6,
      "likes": 0,
      "_id": "5e8e97011f4c204980d6c828",
      "comments": [],
      "title": "修改后测测试",
      "des": "测试",
      "category": "5e8df31a9c313e4b404150c9",
      "date": "2020-04-09 11:31:13",
      "author": "5e675a60ea0bf43770597926",
      "__v": 0
    },
    {
      "tags": [],
      "views": 4,
      "likes": 0,
      "_id": "5e8dfe2bf894ad143859c49e",
      "comments": [],
      "title": "1111111111111111111",
      "des": "1111111111111111111111111111111111",
      "date": "2020-04-09 00:39:07",
      "author": "5e675a60ea0bf43770597926",
      "__v": 0
    },
    {
      "tags": [],
      "views": 2,
      "likes": 0,
      "_id": "5e8dfdfdf894ad143859c49d",
      "comments": [],
      "title": "11",
      "des": "111",
      "date": "2020-04-09 00:38:21",
      "author": "5e675a60ea0bf43770597926",
      "__v": 0
    },
    {
      "tags": [],
      "views": 11,
      "likes": 1,
      "_id": "5e89fb39c5f69d3d944e6e42",
      "comments": [],
      "date": "2020-04-05 23:34:25",
      "title": "ceshi",
      "des": "sss",
      "__v": 0,
      "author": "5e675a60ea0bf43770597926"
    },
    {
      "tags": [],
      "views": 24,
      "likes": 0,
      "_id": "5e7dd7129e9d9d3a3023d2db",
      "comments": [],
      "date": "2020-03-27 17:53:16",
      "title": "你真的了解你JS的对象吗？- 重学前端（二)",
      "des": "书接上文，开始重学前端(第二篇)",
      "__v": 0,
      "author": "5e675a60ea0bf43770597926"
    },
    {
      "tags": [],
      "views": 15,
      "likes": 4,
      "_id": "5e7dd4189e9d9d3a3023d2da",
      "comments": [],
      "date": "2020-03-27 17:53:16",
      "title": "在家办公之 - 重学前端（一）",
      "des": "在家办公已有两周，家里幽静，适合悟道，想想入行三年多，每天在每天都在疲于技术的追求，去学习各种框架，库，却不知，他们都是脱胎于JavaScript，虽然感觉自己每天都在学习，但最终发现却只是工作中的实践和平时零散的学习，虽觉得自己都什么都知道点皮毛。却终不得章法，于是在去年的面试试炼中所有问题暴露无遗。\n",
      "__v": 0,
      "author": "5e675a60ea0bf43770597926"
    },
    {
      "tags": [],
      "views": 93,
      "likes": 2,
      "_id": "5e77165bdbf5bd31987a8185",
      "date": "2020-03-22 15:33:07",
      "title": "阿里前端攻城狮们写了一份前端面试题答案，请查收",
      "des": "话说一周前，我发了这样一条沸点：\n于是我真的就建群收集了题目，和团队的同事一起写答案，我们也不图什么，就是想做一件有意义的事情，现在我整理了下我们的回答，有的不一定就是非常具体的回答，但也提供了思路和参考资料，大家看看是否还有什么补充的，或者面试时遇到的问题，也欢迎补充",
      "__v": 4,
      "comments": [],
      "author": "5e675a60ea0bf43770597926"
    }
  ]
});

// 文章详情
Mock.mock(`${BASE_URL}/article/get/details?ids=5e8f56f947846539905ccbda`, 'get', {
  "msg": "文章详情",
  "state": 0,
  "data": {
    "tags": [
      "JavaScript",
      "前端"
    ],
    "views": 25,
    "likes": 0,
    "_id": "5e8f56f947846539905ccbda",
    "title": "重新前端",
    "des": "灵魂质问？到底什么是js\n1111",
    "content": "<h1><strong>正篇</strong></h1><p><br></p><h2><strong style=\"color: rgb(51, 51, 51);\">灵魂质问？到底什么是js</strong></h2><p><br></p><p>JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。</p><p><br></p><p>百度是这样说的，这就不是人话，其实本质上js 是啥?</p><p><br></p><p><strong>js就是专门编写网页交互行为的语言</strong></p><p><br></p><p>那js是由什么组成的呢，简单来说就一句话</p><p><br></p><p><strong>ECMAScript标准 + webAPI</strong>&nbsp;那么我们今天要一起学习的就是ECMAScript中的 Object，他实际上是一个ES的语言标准。</p><p><br></p><h2><strong>什么是对象 - Object？</strong></h2><p><br></p><p>对象其实有两个特点</p><ul><li><strong>1、描述现实中一个具体事物的属性和功能的程序结构</strong></li><li><strong>2、内存中同时存储多个数据和方法的一块存储空间。</strong></li></ul><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">既然对象是一个具体事物的属性和功能。那么，</span><strong style=\"color: rgb(51, 51, 51);\">事物的属性会成为对象的属性</strong><span style=\"color: rgb(51, 51, 51);\">，&nbsp;</span><strong style=\"color: rgb(51, 51, 51);\">事物的功能会成为对象的方法。</strong></p><p><br></p><p><br></p><h2><strong>什么是面向对象？</strong></h2><p><br></p><p>在程序中，<strong>都是先用对象封装一个事物的属性和功能。然后，再调用对象 的方法，来执行任务</strong>。这就是面向对象，其实在es6出来之前，js总是显得这么合群，其他语言该有的对象的结构，他是一个没沾上，知道es6横空出世，我们才有了类这个概念，面向对象也才算是正式打响！</p><p><br></p><p><br></p><h2><strong>对象的底层到底是什么？</strong></h2><p><br></p><p>由于是重学前端，我们就不讲怎么创建对象这种百度搜索能有100页答案的东西了。</p><p>我们来探究一下，对象的底层到底是什么？ 咱研究底层之前，我们先来看看数组</p><p><br></p><p><br></p><h3><strong>数组</strong></h3><p><br></p><p><span style=\"color: rgb(102, 102, 102); background-color: rgb(248, 248, 248);\">数组对象的作用是：使用单独的变量名来存储一系列的值。</span></p><p><br></p><p><br></p><h2><strong>对象的两类属性特征</strong></h2><p><br></p><p>在我们日常的认知中，对象只是简单的键值对，其实我们深究的时候发现，对象还提供了一些特征来描述我们的对象成员</p><p><br></p><h3><strong>1、描述数据属性的特征</strong></h3><ul><li>value：就是属性的值。</li><li>writable：决定属性能否被赋值。</li><li>enumerable：决定for in能否枚举该属性。</li><li>configurable：决定该属性能否被删除或者改变特征值。</li></ul><p><br></p><h3><strong>2、描述访问器属性的特征</strong></h3><ul><li>getter：函数或undefined，在取属性值时被调用。</li><li>setter：函数或undefined，在设置属性值时被调用。</li><li>enumerable：决定for in能否枚举该属性。</li><li>configurable：决定该属性能否被删除或者改变特征值。</li></ul><p><br></p><p><br></p><h2><strong>面向对象之继承</strong></h2><p><br></p><p>说起面向对象，继承必不可少，那么什么是继承呢？</p><p><br></p><p>用大白话解释：<strong>继承就是父对象的成员，子对象无需创建，就可直接使用</strong></p><p><br></p><p>那么我们怎么继承呢？</p><p><br></p><h3><strong>原型对象实现继承</strong></h3><p><br></p><p>由于在es6出现之前，我们没有类的概念，我们的语言标准，就沿用了祖师爷发明的原型系统，虽然不是正统语言该有的样子，但也独领风骚，什么都长得像java还能叫js吗？</p><p><br></p><p><span style=\"color: rgb(102, 102, 102); background-color: rgb(248, 248, 248);\">原型就是新对象持有一个放公用属性和方法的的引用的地方，注意并不真的去复制一个原型对象，而是使得新对象持有一个原型的引用，每个构造函数在出生的时候(constructor)都附送一个原型对象(prototype).</span></p><p><br></p><p>上述概念，就回答了什么叫做原型对象。这里又有一个老生常谈的名字，<strong>构造函数</strong></p><p><br></p><h4><strong>构造函数</strong></h4><p><br></p><blockquote>构造函数：专门定义一类对象统一结构的特殊函数。</blockquote><p><br></p><h4><strong>new到底干了一件什么事情？</strong></h4><p><br></p><p>我的理解这个new关键字其实干了四件事，也很好记忆</p><p><br></p><ul><li>创建一个空对象</li><li>设置新对象的__proto__继承构造函数的原型对象</li><li>用新对象调用构造函数，将构造函数中的 this，替换为空对象 构造函数会向空对象中添加新的属性和方法。</li><li>将对象地址返回给 obj</li></ul><p><br></p><p>上文中提到this指向问题在此梳理一下，几种情况</p><p><br></p><h3><strong>this指向</strong></h3><p><br></p><p>this的绑定规则总共有下面4种。</p><ul><li>1、默认绑、隐式绑定（严格/非严格模式）</li><li>2、显式绑定</li><li>3、new绑定</li><li>4、箭头函数绑定</li></ul><p><br></p><p>首先声明：<strong>this的确定是在运行时确定也就是调用时，调用位置就是函数在代码中被调用的位置（而不是声明的位置）</strong></p><p><br></p><p>其实我的理解是this是在将这个函数压入执行环境栈的时候就已经被确定了，执行的时候只不过从已经确定的this，指向的地方去拿对象替代this（之前这个this的确定时间问题，被一个阿里大佬问到过，当时也是云里雾里，特地去网上查了很多资料也是各种版本，在这里说一下我的理解，不对之处请大佬指出）.</p><p><br></p><p><br></p><h3><strong>默认绑定</strong></h3><p><br></p><p>默认指向调用这个方法的对象，如果没有对象去调用，那就不用想了，就指向全局，如果是严格模式，那就是undefined</p><p><br></p><h3><strong>显式绑定</strong></h3><p><br></p><p>通过call，apply，bind去绑定this，就叫做显示绑定，这些为啥能实现显示绑定，我就不在赘述，有兴趣可以去看我之前临摹的call，apply，bind的源码&nbsp;<a href=\"https://juejin.im/post/5e36b5c3e51d45026c0d4945\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(2, 105, 200);\">代码抗击病毒之-大厂面试必考题总结</a>.</p><p><br></p><h3><strong>new绑定</strong></h3><p><br></p><h3><strong>箭头函数绑定</strong></h3><p><br></p><p><br></p><h2><strong>对象的所有种类</strong></h2><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">我们都知道万物皆对象，但是其实在js中对象也分种类的，除了我们平常知道的普通对象之外我们还有宿主对象、内置对象接下来一一讲解</span></p><p><br></p><p><br></p><h3><strong>宿主对象（host Objects）</strong></h3><blockquote>由JavaScript宿主环境提供的对象，它们的行为完全由宿主环境决定。</blockquote><p><br></p><p>宿主对象就是我们的js运行在的地方他提供的对象，我们最熟悉不过的就是浏览器环境了， 我们的宿主对象就是window，这个window包含的内容千奇百怪一部分来自 JavaScript语言，一部分来自浏览器环境。</p><h3><br></h3><h3><strong>内置对象（Built-in Objects）</strong></h3><p>内置对象又包含固有对象、原生对象</p><h4><br></h4><h4><strong>固有对象（Intrinsic Objects ）</strong></h4><blockquote>固有对象是由标准规定，随着JavaScript运行时创建而自动创建的对象实例。</blockquote><p>固有对象在任何JS代码执行前就已经被创建出来了，它们通常扮演者类似基础库的角色。我们常用的一些js方法其实就是固有对象</p><p><br></p><h4><strong>原生对象（Native Objects）</strong></h4><blockquote>可以由用户通过Array、RegExp等内置构造器或者特殊语法创建的对 象。</blockquote><p><br></p><p>我们把JavaScript中，能够通过语言本身的构造器创建的对象称作原生对象。在JavaScript标准中，提供了30 多个构造器，通过这些构造器，我们可以用new运算创建新的对象，所以我们把这些对象称作原生对象。</p><p><br></p><p><br></p><h1><strong>写在最后</strong></h1><p><br></p><p>系统的学习了一下对象到底是个什么玩意，并回答了上面的几个问。再次感谢极客大佬的重学前端，让我重新认识js,记录学习，不对之处，欢迎大佬指正！</p>",
    "category": {
      "_id": "5e8dedacd507443e805a337c",
      "typeId": "1002",
      "typeName": "后台",
      "createdDate": "2020-04-08 23:28:44",
      "creator": "5e675a60ea0bf43770597926",
      "__v": 0
    },
    "date": "2020-04-10 01:10:17",
    "author": "5e675a60ea0bf43770597926",
    "__v": 0
  }
});

// 文章评论列表
Mock.mock(`${BASE_URL}/article/get/comments?ids=5e8f56f947846539905ccbda`, 'get', {
  "msg": "评论列表",
  "state": 200,
  "data": [
    {
      "_id": "5e8f41da8f42e7007ca4459d",
      "article": "5e8f3b30a83e0e1ad8164275",
      "user": {
        "_id": "5e675a60ea0bf43770597926",
        "avatar": "/img/avatar/avatar_lsyzfdathum.jpg",
        "username": "阿宇不会前端啊"
      },
      "content": "第二条评论啊",
      "date": "2020-04-09 23:40:10",
      "__v": 0
    },
    {
      "_id": "5e8f3b86a83e0e1ad8164276",
      "article": "5e8f3b30a83e0e1ad8164275",
      "user": {
        "_id": "5e675a60ea0bf43770597926",
        "avatar": "/img/avatar/avatar_lsyzfdathum.jpg",
        "username": "阿宇不会前端啊"
      },
      "content": "1111",
      "date": "2020-04-09 23:13:10",
      "__v": 0
    }
  ]
});



/**
 * 用户模块
 */

//  获取当前登录人的信息
Mock.mock(`${BASE_URL}/user/get/personaldata`, 'get', {
  "msg": "阿宇不会前端啊",
  "state": 0,
  "data": {
    "avatar": "/img/avatar/avatar_lsyzfdathum.jpg",
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

// 获取指定用户的信息
Mock.mock(`${BASE_URL}/user/get/data?ids=5e675a60ea0bf43770597926`, 'get', {
  "msg": "用户信息",
  "state": 200,
  "data": {
    "avatar": "/img/avatar/avatar_mn5iz16l8w.jpg",
    "sex": "保密",
    "motto": "阿里巴巴首席架构师",
    "profession": "前端实习生",
    "company": "阿里巴巴",
    "admin": true,
    "_id": "5e675a60ea0bf43770597926",
    "username": "阿宇不会前端啊",
    "tel": "13628032230",
    "createdDate": "2020-03-12 15:30:22",
    "__v": 0,
    "views": 217,
    "likes": 7
  },
  "owner": true
});

// 获取用户列表
Mock.mock(`${BASE_URL}/admin/get/userlist?page=1`, 'get', {
  "msg": "用户列表",
  "state": 200,
  "data": [
    {
      "avatar": "/img/avatar/default.png",
      "sex": "保密",
      "motto": "",
      "profession": "",
      "company": "",
      "admin": false,
      "_id": "5e8e0224b3f57b33e0c39bd4",
      "password": "333",
      "tel": "13628032222",
      "username": "dtec_enawr1jsaz",
      "createdDate": "2020-04-09 00:56:04",
      "__v": 0
    },
    {
      "avatar": "/img/avatar/default.png",
      "sex": "保密",
      "motto": "",
      "profession": "",
      "company": "",
      "admin": false,
      "_id": "5e8d415b86b11e1c348597ba",
      "password": "336",
      "tel": "13628032211",
      "username": "dtec_0u4yajo10t09",
      "createdDate": "2020-04-08 11:13:31",
      "__v": 0
    },
    {
      "avatar": "/img/avatar/default.png",
      "sex": "保密",
      "motto": "",
      "profession": "",
      "company": "",
      "admin": false,
      "_id": "5e8d412286b11e1c348597b9",
      "password": "123",
      "tel": "13628032200",
      "username": "dtec_gk6uy5llvf",
      "createdDate": "2020-04-08 11:12:34",
      "__v": 0
    },
    {
      "avatar": "/img/avatar/default.png",
      "sex": "保密",
      "motto": "",
      "profession": "",
      "company": "",
      "admin": false,
      "_id": "5e8c456557c9461e502b8684",
      "username": "dtec_bb1u8diuc28",
      "createdDate": "2020-04-07 17:18:03",
      "password": "123",
      "tel": "13628032239",
      "__v": 0
    },
    {
      "avatar": "/img/avatar/default.png",
      "sex": "保密",
      "motto": "",
      "profession": "",
      "company": "",
      "admin": false,
      "_id": "5e8c425a84818530143b59b6",
      "username": "dtec_cyfzzr6e9mk",
      "createdDate": "2020-04-07 17:04:13",
      "password": "123",
      "tel": "13628032232",
      "__v": 0
    },
    {
      "avatar": "/img/avatar/default.png",
      "sex": "保密",
      "motto": "",
      "profession": "",
      "company": "",
      "admin": false,
      "_id": "5e8c425484818530143b59b5",
      "username": "dtec_cyfzzr6e9mk",
      "createdDate": "2020-04-07 17:04:13",
      "password": "123",
      "tel": "13628032233",
      "__v": 0
    },
    {
      "avatar": "/img/avatar/default.png",
      "sex": "保密",
      "motto": "",
      "profession": "",
      "company": "",
      "admin": false,
      "_id": "5e8c424f84818530143b59b4",
      "username": "dtec_cyfzzr6e9mk",
      "createdDate": "2020-04-07 17:04:13",
      "password": "123",
      "tel": "13628032234",
      "__v": 0
    },
    {
      "avatar": "/img/avatar/default.png",
      "sex": "保密",
      "motto": "",
      "profession": "",
      "company": "",
      "admin": false,
      "_id": "5e8c424984818530143b59b3",
      "username": "dtec_cyfzzr6e9mk",
      "createdDate": "2020-04-07 17:04:13",
      "password": "123",
      "tel": "13628032235",
      "__v": 0
    },
    {
      "avatar": "/img/avatar/avatar_wiqk0olc57b.jpg",
      "sex": "保密",
      "motto": "我是猪",
      "profession": "pm",
      "company": "",
      "admin": true,
      "_id": "5e6908b3c371241144d4035f",
      "username": "胡亚娟",
      "password": "123",
      "tel": "13628032231",
      "createdDate": "2020-03-11 15:50:11",
      "__v": 0
    },
    {
      "avatar": "/img/avatar/avatar_lsyzfdathum.jpg",
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
  ]
});