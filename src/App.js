/*
 * @Description:
 * @Author: linZengFa
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-18 11:10:20
 * @LastEditTime: 2019-04-18 22:42:23
 */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import './style/index.scss';
import { Provider } from 'react-redux';

import { routeList } from './router';
import Nav from './view/nav';

function RenderRoute(router) {
  const { routerList } = router;
  return routerList.map(item => {
    return <Route
        component={item.component}
        exact
        key={item.name}
        path={item.path}
           />;
  });
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <RenderRoute routerList={routeList} />
          <Nav/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
