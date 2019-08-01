/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 13:14:14
 * @LastEditTime: 2019-04-18 13:36:45
 */
import axios from 'axios';
import { Toast } from 'antd-mobile';

function showLoading() {
  Toast.loading('加载中');
}
function hideLoading() {
  Toast.hide();
}
const service = axios.create({
  timeout: 15000
});

service.interceptors.request.use(config => {
  showLoading();
  return config;
}, error => {
  console.log(error);
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
  response => {
    hideLoading();
    const res = response.data;
    return res;
  },
  error => {
    hideLoading();
    console.log('err' + error);
    Toast.fail('请求错误，刷新重试', 1);
    return Promise.reject(error);
  }
);

export default service;


