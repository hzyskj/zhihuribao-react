/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 14:45:26
 * @LastEditTime: 2019-05-06 15:27:01
 */
import React, { Component } from 'react';
import navList from './navList';
import './style/index.scss';
import { NavLink, withRouter } from 'react-router-dom';
function isTab(path) {
  return navList.some(item => {
    return item.to === path;
  });
}
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navList
    };
  }

  render() {
    const { history: { location: { pathname } } } = this.props;
    let showTab = isTab(pathname);
    return (
      showTab ?
        <div className="flex footer-nav">
          {
            this.state.navList.map(item => {
              return (
                <NavLink activeClassName="active"
                    className="flex-1 flex flex-x-center flex-y-center"
                    exact
                    key={item.id}
                    to={item.to}
                >
                  <div>{item.name}</div>
                </NavLink>
              );
            })
          }
        </div>
        :
        null
    );
  }
}
export default withRouter(Nav);