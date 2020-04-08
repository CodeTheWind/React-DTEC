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
      "_id": "5e8df561993fa537d8005914",
      "title": "关联作者",
      "des": "关联作者测试",
      "date": "2020-04-09 00:01:37"
    },
    {
      "_id": "5e89fb39c5f69d3d944e6e42",
      "title": "ceshi",
      "des": "sss",
      "date": "2020-04-05 23:34:25"
    },
    {
      "_id": "5e7dd7129e9d9d3a3023d2db",
      "title": "你真的了解你JS的对象吗？- 重学前端（二)",
      "des": "书接上文，开始重学前端(第二篇)",
      "date": "2020-03-27 17:53:16"
    },
    {
      "_id": "5e7dd4189e9d9d3a3023d2da",
      "title": "在家办公之 - 重学前端（一）",
      "des": "在家办公已有两周，家里幽静，适合悟道，想想入行三年多，每天在每天都在疲于技术的追求，去学习各种框架，库，却不知，他们都是脱胎于JavaScript，虽然感觉自己每天都在学习，但最终发现却只是工作中的实践和平时零散的学习，虽觉得自己都什么都知道点皮毛。却终不得章法，于是在去年的面试试炼中所有问题暴露无遗。\n",
      "date": "2020-03-27 17:53:16"
    },
    {
      "_id": "5e77165bdbf5bd31987a8185",
      "title": "阿里前端攻城狮们写了一份前端面试题答案，请查收",
      "des": "话说一周前，我发了这样一条沸点：\n于是我真的就建群收集了题目，和团队的同事一起写答案，我们也不图什么，就是想做一件有意义的事情，现在我整理了下我们的回答，有的不一定就是非常具体的回答，但也提供了思路和参考资料，大家看看是否还有什么补充的，或者面试时遇到的问题，也欢迎补充",
      "date": "2020-03-22 15:33:07"
    },
    {
      "_id": "5e6b3adc40a29b4cc8b797be",
      "title": "另一个作者测试",
      "des": "小号测试简述",
      "date": "Fri Mar 13 2020 15:48:44 GMT+0800 (GMT+08:00)"
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
