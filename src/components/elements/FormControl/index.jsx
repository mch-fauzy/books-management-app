import React from 'react';

const FormControl = ({ children, id, label, error }) => {
  return (
    <div className="form-control w-full">

      {label ? (
        <div className="label">
          <label className="label-text" htmlFor={id}>{label}</label>
        </div>
      ) : null}

      {children}

      {error ? (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      ) : null}
    </div>
  )
}

export default FormControl;
