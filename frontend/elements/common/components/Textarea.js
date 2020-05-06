import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => {
  const {
    title,
    name,
    rows,
    cols,
    value,
    handleChange,
    placeholder,
  } = props;

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">{title}</label>
      <textarea
        className="form-control"
        name={name}
        rows={rows}
        cols={cols}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

Textarea.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Textarea;
