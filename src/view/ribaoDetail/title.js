/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-19 21:33:29
 * @LastEditTime: 2019-04-22 15:30:00
 */
import React,{ Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { throttle } from '../../lib/utils';
class DetailTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false
    };
    this.componentDidMount();
  }
  componentDidMount() {
    document.body.onscroll = throttle(this.setNavBarClassName, 200, this);
  }
  componentWillUnmount() {
    document.body.onscroll = null;
  }
  setNavBarClassName() {
    if (document.documentElement.scrollTop > 4 * document.body.offsetWidth / 7.5) {
      if(!this.state.scroll) {
        this.setState({
          scroll: true
        });
      }
    } else {
      if (this.state.scroll) {
        this.setState({
          scroll: false
        });
      }
    }
  }
  render() {
    return (
      <div>
        <NavBar
            className={this.state.scroll ? 'scrollBar' : ''}
            icon={<Icon type="left" />}
            mode="light"
            onLeftClick={() => this.props.back()}
        >
          详情
        </NavBar>
        <div className="detail-title">
          <img alt=""
              src={this.props.pic}
          />
          <div className="mask" />
          <span className="title">{this.props.title}</span>
        </div>
      </div>

    );
  }
}
export default DetailTitle;