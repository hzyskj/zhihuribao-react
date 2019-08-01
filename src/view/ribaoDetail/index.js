/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 15:49:52
 * @LastEditTime: 2019-04-19 22:59:53
 */
import React, { Component } from 'react';
import DetailsTitle from './title';
import './index.scss';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

class RiBaoDetail extends Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clear();
  }
  linkAppend(css) {
    const link = document.createElement('link');
    link.href = css;
    link.setAttribute('type', 'text/css');
    link.setAttribute('rel', 'stylesheet');
    var heads = document.getElementsByTagName('head');
    heads[0].appendChild(link);
    this.props.setCssAppendStatus();
  }
  back() {
    this.props.history.go(-1);
  }
  render() {
    const { body, cssAppend, css, title, pic} = this.props;
    if (!cssAppend && css !== '') this.linkAppend(css);
    return (
      <div>
        <DetailsTitle
            back={this.back.bind(this)}
            pic={pic}
            title={title}
        />
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    );
  }
}
const mapState = (state) => {
  const { body, css, cssAppend,title,pic} = state.zhihuDetail;
  return {
    body,
    css,
    cssAppend,
    title,
    pic
  };
};

const mapDispatch = (dispatch) => {
  return {
    getDetail(id) {
      const action = actionCreators.getDetail(id);
      dispatch(action);
    },
    clear() {
      const action = actionCreators.clearDetail();
      dispatch(action);
    },
    setCssAppendStatus() {
      const action = actionCreators.cssAppendStatus();
      dispatch(action);
    }
  };
};

export default connect(mapState,mapDispatch)(RiBaoDetail);
