import * as React from 'react';

import useForm from 'shared/hooks/useForm';

import Button from 'shared/components/Button/Button';

import TextField from 'shared/components/TextField/TextField';

import initialState from './initialState';
import fields from './fields';

import css from './RegisterForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <>
      <h2 className={css.title}>Registration</h2>

      <form onSubmit={handleSubmit} className={css.form}>
        <TextField value={name} handleChange={handleChange} {...fields.name} />
        <TextField
          value={email}
          handleChange={handleChange}
          {...fields.email}
        />
        <TextField
          value={password}
          handleChange={handleChange}
          {...fields.password}
        />

        <Button>Register</Button>
      </form>
    </>
  );
};

export default RegisterForm;
