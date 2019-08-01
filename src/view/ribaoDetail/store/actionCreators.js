/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 14:19:34
 * @LastEditTime: 2019-04-19 21:54:08
 */
import * as actionTypes from './actionTypes';
import { getDetails } from '../../../api/getZhiHu';

export const setDetail = (data) => ({
  type: actionTypes.SET_DETAIL,
  data
});

export const clearDetail = () => ({
  type: actionTypes.CLEAR
});

export const cssAppendStatus = () => ({
  type: actionTypes.SET_CSSAPPEND_STATUS
});
export const getDetail = (id) => {
  return (dispatch) => {
    getDetails(id).then(res => {
      dispatch(setDetail(res));
    });
  };
};