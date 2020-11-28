import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import hotdogsReducer from './hotdogs/hotdogs.reducer';

export default combineReducers({
  hotdogs: hotdogsReducer,
  form: formReducer,
});
