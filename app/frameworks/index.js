/**
 * Created by fiddlest on 2016-10-02.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from '../store/store';
import App from '../components/App/App';
import CountContainer from '../components/CountContainer/CountContainer';
import DemoPage from '../components/DemoPage/DemoPage';

const history = syncHistoryWithStore(browserHistory, store);

export default () => {
  ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={DemoPage}/>
          <Route path="/count" component={CountContainer}/>
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('app'));
};