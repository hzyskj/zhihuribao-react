/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 21:14:31
 * @LastEditTime: 2019-05-06 16:57:48
 */
import AsyncComponent from '../components/asyncComponent';
const Home = AsyncComponent(() => import('../view/ribao'));
const Detail = AsyncComponent(() => import('../view/ribaoDetail'));
const Weather = AsyncComponent(() => import('../view/weather'));
export const routeList = [
  {
    name: '知乎日报',
    path: '/',
    component: Home
  }, {
    name: '知乎日报详情',
    path: '/detail/:id',
    component: Detail
  }, {
    name: '天气',
    path: '/weather',
    component: Weather
  }
];