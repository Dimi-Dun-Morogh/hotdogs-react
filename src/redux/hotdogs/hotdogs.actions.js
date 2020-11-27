import { hotdogActionTypes } from './hotdogs.types';

export const setHotdogs = async (dispatch, getState) => {
  const hotdogs = await fetch('http://localhost:3003/api/hotdogs').then((response) =>
    response.json(),
  );
  dispatch({
    type: hotdogActionTypes.SET_HOTDOGS,
    payload: hotdogs,
  });
};
