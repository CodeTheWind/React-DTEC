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
 * 文章模块
 */

// 文章列表 - 基本
Mock.mock(`${BASE_URL}/article/get/list?page=1&typeId=0&keyword=`, 'get', {
  "msg": "全部文章列表",
  "state": 0,
  "data": [
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
      "_id": "5e8eb2cad305190d28749505",
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
Mock.mock(`${BASE_URL}/article/get/details?ids=5e8eb2cad305190d28749505`, 'get', {
  "msg": "文章详情",
  "state": 0,
  "data": {
    "tags": [
      "测试",
      "还是测试",
    ],
    "views": 26,
    "likes": 0,
    "_id": "5e8eb2cad305190d28749505",
    "title": "评论的文章",
    "des": "林伟",
    "content": "<p>拉十九大</p>",
    "category": "人工智能",
    "date": "2020-04-09 13:29:46",
    "author": {
      "avatar": "/img/avatar/avatar_lsyzfdathum.jpg",
      "sex": "保密",
      "motto": "阿里巴巴首席架构师",
      "profession": "前端实习生",
      "company": "阿里巴巴",
      "admin": true,
      "_id": "5e675a60ea0bf43770597926",
      "username": "阿宇不会前端啊",
      "tel": "13628032230",
      "createdDate": "2020-03-12 15:30:22",
      "__v": 0
    },
    "__v": 0
  }
});

// 文章评论列表
Mock.mock(`${BASE_URL}/article/get/comments?ids=5e8eb2cad305190d28749505`, 'get', {
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
  },
  "owner": true
});
