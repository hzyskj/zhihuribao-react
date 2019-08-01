/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 13:37:10
 * @LastEditTime: 2019-04-19 23:28:19
 */
import request from '../lib/request';

export function getRibaoList(date) {
  return request({
    url: `/api/4/news/before/${date}`
  });
}

export function getDetails(id) {
  return request({
    url: `/api/4/news/${id}`
  });
}