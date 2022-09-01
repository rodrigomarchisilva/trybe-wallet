import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
  render() {
    const {
      html: { field, label, value, handleChange }
    } = this.props;

    return (
      <label htmlFor={field}>
        {label}
        <textarea id={field} value={value} onChange={({ target }) => handleChange(field, target)} />
      </label>
    );
  }
}

TextArea.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func
}.isRequired;
