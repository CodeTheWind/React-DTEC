import axios from 'axios';
import qs from 'qs';

/**
 * 自定义实例默认值
 */
const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000, // 请求超时时间
  withCredentials: true,
});

/**
 * 添加请求拦截器 ，意思就是发起请求接口之前做什么事，一般都会发起加载一个loading
 */
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么（... 这里写你的展示loading的逻辑代码 ）
    // 获取token，配置请求头
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
  },
  error => {
    // 对请求错误做些什么，处理这个错误
    // 可以直接处理或者展示出去,toast show()
    console.warn(error);
    return Promise.reject(error);
  }
);
/**
 * 添加响应拦截器
 */
instance.interceptors.response.use(
  response => {
    let res = response.data;
    return res;
  },
  error => {
    //响应错误
    // console.log(error)
    return Promise.reject(error);
  }
)
/**
 * 使用es6中的类，进行简单封装
 */
export class request {
  // 使用async ... await
  static async get(url: string, params: any) {
    return await instance.get(url, {
      params: params
    });
  }
  static async post(url: string, params: any) {
    return await instance.post(url, qs.stringify(params));
  }
  static async filePost(url: string, params: any) {
    return await instance.post(url, params);
  }
};