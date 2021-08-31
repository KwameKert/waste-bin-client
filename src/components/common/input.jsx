import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="text-muted">
        {label}
      </label>
      <input {...rest} name={name} id={name} className="form-control" />
      <div className="error-message text-bold">
        {error && <p className="alert alert-danger">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
