import { createReducer } from '@reduxjs/toolkit';
import { EMAIL_AND_PASSWORD } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: ''
};

const user = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(EMAIL_AND_PASSWORD, (state, action) => {
    state.email = action.email;
    state.password = action.password;
  });
});

export default user;
