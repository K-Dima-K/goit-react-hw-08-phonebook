import { useSelector, useDispatch } from 'react-redux';

import * as React from 'react';

import { getUser } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const { name } = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <div>
        <p className={css.name}>{`Hello, ${name}!`}</p>
      </div>
      <button className={css.btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
