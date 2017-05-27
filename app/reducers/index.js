// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import applications from './applications';

const rootReducer = combineReducers({
  counter,
  applications,
  router,
});

export default rootReducer;
