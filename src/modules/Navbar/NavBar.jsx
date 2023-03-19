import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserAuth from './NavbarAuth/UserAuth';
import UserMenu from './UserMenu/UserMenu';

import css from './NavBar.module.css';

import { isUserLogin } from '../../redux/auth/auth-selectors';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className={css.navbar_wrapper}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>

      {!isLogin && <UserAuth />}
      {isLogin && <UserMenu />}
    </div>
  );
};

export default Navbar;
