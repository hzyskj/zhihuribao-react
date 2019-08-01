/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 14:19:34
 * @LastEditTime: 2019-04-19 23:37:19
 */
import * as actionTypes from './actionTypes';
import { getRibaoList } from '../../../api/getZhiHu';

export const setList = (data) => ({
  type: actionTypes.SET_LIST,
  data
});

export const getList = (date) => {
  return (dispatch) => {
    getRibaoList(date).then(res => {
      dispatch(setList([...res.stories]));
    });
  };
};