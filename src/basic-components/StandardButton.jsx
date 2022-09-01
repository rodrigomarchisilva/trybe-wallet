import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StandardButton extends Component {
  render() {
    const {
      html: { handleClick, content }
    } = this.props;

    return (
      <button type="button" onClick={handleClick}>
        {content}
      </button>
    );
  }
}

StandardButton.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
  content: PropTypes.string
}.isRequired;
