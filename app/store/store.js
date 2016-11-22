/**
 * Created by fiddlest on 2016-10-02.
 */
'use strict';
import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import * as appReducers from '../components/CountContainer/reducers';

const reducer = combineReducers({
    ...appReducers,
    routing: routerReducer
});


export default createStore(reducer);