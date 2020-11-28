import store from '../redux/store';

export const formValidatorHelper = (values) => {
  const state = store.getState();
  const { AllHotdogs } = state.hotdogs;
  const errors = {};

  if (!values.name) {
    errors.name = 'name is required';
  } else if (values.name.length < 3) {
    errors.name = ' name should be > 3';
  } else if (AllHotdogs.find(({ name }) => name === values.name)) {
    errors.name = ' this name already in use';
  }
  if (!values.title) {
    errors.title = 'title is required';
  } else if (values.title.length < 3) {
    errors.title = 'title should be > 3';
  }
  if (!values.image) {
    errors.image = 'image link is required';
  } else if (values.image.length < 3) {
    errors.image = 'image link should be > 3';
  }

  return errors;
};
