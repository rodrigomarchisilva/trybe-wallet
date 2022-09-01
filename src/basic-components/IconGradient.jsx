import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IconGradient extends Component {
  render() {
    const { id, darkColor, lightColor } = this.props;

    return (
      <svg width="0" height="0" display="block">
        <linearGradient id={id} x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor={darkColor} offset="0%" />
          <stop stopColor={lightColor} offset="100%" />
        </linearGradient>
      </svg>
    );
  }
}

IconGradient.propTypes = {
  id: PropTypes.string,
  darkColor: PropTypes.string,
  lightColor: PropTypes.string
}.isRequired;
