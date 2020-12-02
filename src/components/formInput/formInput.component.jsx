import React from 'react';

export const input = ({
  input,
  textareatrue,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <div className="form-input">
      {textareatrue ? (
        <textarea {...input} type={type} placeholder={placeholder} id={id} />
      ) : (
        <input {...input} type={type} placeholder={placeholder} id={id} />
      )}
      {touched && error && (
        <span style={{ fontSize: '10px', color: 'red', display: 'block' }}>{error}</span>
      )}
    </div>
  );
};
