import { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';

export default class Dropdown extends Component {
  render() {
    const { id, label, value, onChange, options, gridProps } = this.props;

    return (
      <Grid {...gridProps}>
        <FormControl size="small" fullWidth>
          <InputLabel id={id}>{label}</InputLabel>
          <Select
            value={options.length === 0 ? '' : value}
            labelId={id}
            label={label}
            onChange={onChange}>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    );
  }
}

Dropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object,
  gridProps: PropTypes.object
}.isRequired;
