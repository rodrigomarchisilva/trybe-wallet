import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserInfo } from '../../actions';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { GiWallet } from 'react-icons/gi';
import IconGradient from '../../basic-components/IconGradient';
import { page, logo, form } from './staticData';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false,
      validate: false,
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ value }, field) {
    const inputIsValid = form.inputs[field].pattern.test(value);
    this.setState({
      [field]: value,
      [`${field}IsValid`]: inputIsValid
    });
  }

  handleSubmit(event) {
    const { emailIsValid, passwordIsValid } = this.state;
    event.preventDefault();
    event.stopPropagation();
    this.setState({ validate: true });
    if (emailIsValid && passwordIsValid) {
      const { dUserInfo } = this.props;
      this.setState({ redirect: true });
      dUserInfo(this.state);
    }
  }

  render() {
    const {
      state: { email, password, emailIsValid, passwordIsValid, validate, redirect },
      handleSubmit,
      handleChange
    } = this;

    const formProps = {
      onSubmit: handleSubmit,
      noValidate: true
    };

    const emailInputProps = {
      ...form.inputs.email.props,
      value: email,
      onChange: ({ target }) => handleChange(target, 'email'),
      error: validate && !emailIsValid,
      helperText: validate && !emailIsValid ? form.inputs.email.helperText : ''
    };

    const passwordInputProps = {
      ...form.inputs.password.props,
      value: password,
      onChange: ({ target }) => handleChange(target, 'password'),
      error: validate && !passwordIsValid,
      helperText: validate && !passwordIsValid ? form.inputs.password.helperText : ''
    };

    if (redirect) return <Navigate to="/carteira" />;

    return (
      <Box {...page.box.props}>
        <IconGradient {...logo.svg.props} />
        <Box {...form.box.props}>
          <form {...formProps}>
            <Box {...logo.box.props}>
              <GiWallet {...logo.icon.props} />
              <Typography {...logo.heading.props}>{logo.heading.innerText}</Typography>
            </Box>
            <Stack {...form.stack.props}>
              <TextField {...emailInputProps} />
              <TextField {...passwordInputProps} />
              <Button {...form.button.props}>{form.button.innerText}</Button>
            </Stack>
          </form>
        </Box>
      </Box>
    );
  }
}

Login.propTypes = {
  dUserInfo: PropTypes.object
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dUserInfo: (userInfo) => dispatch(getUserInfo(userInfo))
});

export default connect(null, mapDispatchToProps)(Login);
