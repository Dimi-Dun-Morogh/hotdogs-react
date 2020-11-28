import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { input } from '../formInput/formInput.component';
import { formValidatorHelper } from '../../helpers/formValidate';
import CustomButton from '../custom-button/custom-button.component';

import './modal-form.styles.css';

const ModalForm = ({ handleSubmit, reset, pristine, submitting, valid, handleModal }) => {
  return (
    <form className="form-modal" onSubmit={handleSubmit}>
      <Field name="name" type="text" id="name" placeholder="name" component={input} />
      <Field name="title" type="text" id="title" component={input} placeholder="title" />
      <Field name="image" type="text" id="image" component={input} placeholder="image-link" />
      <Field
        name="description"
        type="text"
        id="description"
        component="textarea"
        placeholder="description"
      />
      <div className="buttons-modal">
        <CustomButton type="button" inverted onClick={() => handleModal()}>
          No thanks
        </CustomButton>
        <CustomButton type="submit" inverted>
          Add
        </CustomButton>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'ModalForm',
  validate: formValidatorHelper,
  destroyOnUnmount: false,
})(ModalForm);
