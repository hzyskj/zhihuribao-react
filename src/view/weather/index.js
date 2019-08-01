/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-06 16:48:11
 * @LastEditTime: 2019-05-06 16:56:51
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>天气</p>
      </div>
    );
  }
}

const mapState = (state) => {
  const { city } = state;
  return {
    city
  };
};

export default connect(mapState, null)(Weather);