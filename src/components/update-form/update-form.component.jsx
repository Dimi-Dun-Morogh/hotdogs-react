import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { input } from '../formInput/formInput.component';
import { formValidatorHelper } from '../../helpers/formValidate';
import CustomButton from '../custom-button/custom-button.component';

import './update-form.styles.css';

const UpdateForm = ({ handleSubmit, reset, pristine, submitting, valid, cancelEdit, onDelete }) => {
  return (
    <form className="form-update" onSubmit={handleSubmit}>
      <Field name="name" type="text" id="name" placeholder="name" component={input} />
      <Field name="title" type="text" id="title" component={input} placeholder="title" />
      <Field name="image" type="text" id="image" component={input} placeholder="image-link" />
      <Field
        name="description"
        type="text"
        id="description"
        component={input}
        textareatrue
        placeholder="description"
      />
      <CustomButton form type="submit" onClick={(values) => handleSubmit(values)}>
        Update
      </CustomButton>
      <CustomButton form type="button" onClick={() => onDelete()}>
        Delete
      </CustomButton>
      <CustomButton form type="button" onClick={() => cancelEdit()}>
        Cancel
      </CustomButton>
    </form>
  );
};

export default reduxForm({
  form: 'UpdateForm',
  validate: formValidatorHelper,
  enableReinitialize: true,
  destroyOnUnmount: false,
})(UpdateForm);
