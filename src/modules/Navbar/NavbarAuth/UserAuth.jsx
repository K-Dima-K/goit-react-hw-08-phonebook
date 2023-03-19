import { NavLink } from 'react-router-dom';

import css from './UserAuth.module.css';

const UserAuth = () => {
  return (
    <div className={css.auth_wrapper}>
      <NavLink to="register" className={css.link}>
        Register
      </NavLink>
      <span className={css.split}>|</span>
      <NavLink to="login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};

export default UserAuth;
