/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 13:59:24
 * @LastEditTime: 2019-04-18 16:11:27
 */
import { combineReducers } from 'redux';
import zhihuRibaoListReducer from '../view/ribao/store/reducer';
import zhihuRibaoDetailReducer from '../view/ribaoDetail/store/reducer';

export default combineReducers({
  zhihu: zhihuRibaoListReducer,
  zhihuDetail: zhihuRibaoDetailReducer
});

