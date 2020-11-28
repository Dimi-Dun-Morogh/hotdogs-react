import { hotdogActionTypes } from './hotdogs.types';

const url = process.env.REACT_APP_API_URL;
//  'http://localhost:3003/api/hotdogs';

export const toggleModal = (bool) => ({
  type: hotdogActionTypes.TOGGLE_MODAL,
  payload: bool,
});

export const setHotdogs = async (dispatch, getState) => {
  console.log(url);
  const hotdogs = await fetch(url).then((response) => response.json());
  dispatch({
    type: hotdogActionTypes.SET_HOTDOGS,
    payload: hotdogs,
  });
};

export const updateHotDog = (item) => {
  console.log(item, 'updatehotdog');
  return async (dispatch) => {
    await fetch(`${url}/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then((response) => response.json());
    dispatch(setHotdogs);
  };
};

export const deleteHotDog = (id) => {
  return async (dispatch) => {
    await fetch(`${url}/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
    dispatch(setHotdogs);
  };
};

export const createHotDog = (data) => {
  return async (dispatch) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
    dispatch(setHotdogs);
  };
};
