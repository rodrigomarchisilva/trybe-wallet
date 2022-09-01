import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const {
      html: { field, label, type, value, handleChange }
    } = this.props;

    return (
      <label htmlFor={field}>
        {label}
        <input
          type={type}
          id={field}
          value={value}
          onChange={({ target }) => handleChange(field, target)}
        />
      </label>
    );
  }
}

Input.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func
}.isRequired;
