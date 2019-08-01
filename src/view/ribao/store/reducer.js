/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 14:08:28
 * @LastEditTime: 2019-04-20 00:06:01
 */
import * as actionTypes from './actionTypes';
function getDate(day) {
  let date = new Date();
  if (day) date = new Date(new Date() - 60 * 60 * 24 * 1000 * day);
  const m = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${date.getFullYear()}${m}${d}`;
}

const defaultState = {
  list: [],
  date: getDate(),
  nextDate: getDate(1),
  page: 0
};

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SET_LIST) {
    const data = JSON.parse(JSON.stringify(state));
    data.list = [...data.list,...action.data];
    data.page += 1;
    data.nextDate = getDate(data.page);
    return data;
  }
  return state;
};