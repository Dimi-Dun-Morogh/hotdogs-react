import { hotdogActionTypes } from './hotdogs.types';

const INITIAL_STATE = {
  AllHotdogs: [],
  showModal: false,
};

const hotdogsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case hotdogActionTypes.SET_HOTDOGS:
      return {
        ...state,
        AllHotdogs: action.payload,
      };
    case hotdogActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    default:
      return state;
  }
};
export default hotdogsReducer;
