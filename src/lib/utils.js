/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-19 22:26:01
 * @LastEditTime: 2019-04-19 23:37:48
 */
export const throttle = function (fn, time, that = this) {
  let indexTime = +new Date();
  return () => {
    const t = +new Date();
    if (t - indexTime > time) {
      indexTime = t;
      return fn.apply(that, arguments);
    }
  };
};

export const fangdou = function (fn, time, that = this) {
  let indexTime = +new Date();
  return () => {
    const t = +new Date();
    if (t - indexTime > time) {
      indexTime = t;
      return fn.apply(that, arguments);
    }
  };
};
