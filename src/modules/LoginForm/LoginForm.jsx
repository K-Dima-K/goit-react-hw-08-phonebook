import * as React from 'react';
import { useState } from 'react';

import Button from 'shared/components/Button/Button';

import TextField from 'shared/components/TextField/TextField';

import initialState from './initialState';
import fields from './fields';

import css from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleSearch = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };
  const { email, password } = state;

  return (
    <>
      <h2 className={css.title}>Login to your account</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <TextField
          value={email}
          handleChange={handleSearch}
          {...fields.email}
        />
        <TextField
          value={password}
          handleChange={handleSearch}
          {...fields.password}
        />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default LoginForm;
