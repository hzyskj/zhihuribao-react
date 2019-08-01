/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 13:45:22
 * @LastEditTime: 2019-05-15 18:03:36
 */
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'https://news-at.zhihu.com/api' ,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
       // cookieDomainRewrite: "http://localhost:3000"
    }));
};