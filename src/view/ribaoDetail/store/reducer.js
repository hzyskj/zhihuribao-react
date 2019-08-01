/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 14:08:28
 * @LastEditTime: 2019-04-19 21:54:44
 */
import * as actionTypes from './actionTypes';
const defaultState = {
  body: '',
  css: '',
  cssAppend: false,
  title: '',
  pic: ''
};

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SET_DETAIL) {
    console.log(action);
    const data = JSON.parse(JSON.stringify(state));
    const result = action.data;
    data.body = result.body;
    data.title = result.title;
    data.pic = result.image;
    if (!data.css) data.css = result.css;
    return data;
  }
  if (action.type === actionTypes.CLEAR) {
    const data = JSON.parse(JSON.stringify(state));
    data.body = '';
    data.title = '';
    data.pic = '';
    return data;
  }
  if (action.type === actionTypes.SET_CSSAPPEND_STATUS) {
    const data = JSON.parse(JSON.stringify(state));
    data.cssAppend = true;
    return data;
  }
  return state;
};