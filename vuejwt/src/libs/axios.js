import axios from 'axios';
import util from './local';

class AjaxRuquest {
  constructor() {
    this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/';
    this.timeout = 3000;
  }

  merge(options) {
    return { baseURL: this.baseURL, timeout: this.timeout, ...options };
  }

  setInterceptors(instance) {
    // 设置请求拦截器
    instance.interceptors.request.use(
      (config) => {
        config.headers.authorization = util.getlocal('token');
        return config;
      },
      (err) => {
        Promise.reject(err);
      },
    );
    // 设置响应拦截器
    instance.interceptors.response.use(
      res => res.data,
      (err) => {
        Promise.reject(err);
      },
    );
  }

  request(options) {
    const instance = axios.create();
    // 把传进来的参数和默认参数进行合并
    const config = this.merge(options);
    // 设置拦截器
    this.setInterceptors(instance);
    return instance(config);
  }
}
export default new AjaxRuquest();
// AjaxRuquest.request({
// 	url:'/djljd'
// })