/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors:
 * @Date: 2019-04-18 11:14:11
 * @LastEditTime: 2019-04-18 11:52:42
 */
'use strict';

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  }
};
