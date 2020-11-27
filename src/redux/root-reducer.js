import { combineReducers } from 'redux';
import hotdogsReducer from './hotdogs/hotdogs.reducer';

export default combineReducers({
  hotdogs: hotdogsReducer,
});
