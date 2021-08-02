import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="text-muted">
        {label}
      </label>
      <input {...rest} name={name} id={name} className="form-control" />
      <p className="error-message text-bold">
        {error && <div className="alert alert-danger">{error}</div>}
      </p>
    </div>
  );
};

export default Input;
