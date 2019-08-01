/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 13:51:04
 * @LastEditTime: 2019-05-06 17:01:00
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { throttle } from '../../lib/utils';
import * as actionCreators from './store/actionCreators';
import './style/index.scss';

class ZhiHuRiBaoList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.page === 0) this.props.getList(this.props.date);
    this.bodyBindScroll();
  }
  componentWillUnmount() {
    document.body.onscroll = null;
  }
  bodyBindScroll() {
    document.body.onscroll = this.getScrollFloor.bind(this);
  }

  getScrollFloor() {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let h = document.documentElement.clientHeight;
    if (scrollTop + h === scrollHeight) {
      this.props.getList(this.props.nextDate);
    }
  }

  render() {
    return (
      <div className="flex flex-warp zhihu-list">
        {
          this.props.list.map(item => {
            return (
              <Link className="flex-1 list-item"
                  key={item.id}
                  to={`/detail/${item.id}`}
              >
                <div >
                  <img alt="没有图片"
                      src={item.images[0]}
                  />
                  <p>{item.title}</p>
                </div>
              </Link>
            );
          })
        }
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    list: state.zhihu.list,
    date: state.zhihu.date,
    nextDate: state.zhihu.nextDate,
    page: state.zhihu.page
  };
};

const mapDispatch = (dispatch) => {
  return {
    getList(date) {
      const action = actionCreators.getList(date);
      dispatch(action);
    }
  };
};

export default connect(mapState,mapDispatch)(ZhiHuRiBaoList);





