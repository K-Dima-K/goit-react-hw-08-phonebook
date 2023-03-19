import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/auth-selectors';

import css from './HomePage.module.css';

const HomePage = () => {
  const { isLogin, token } = useSelector(getAuth);

  return (
    <>
      {isLogin && token && (
        <div className={css.wrapper}>
          <h1 className={css.title}>You are lost?</h1>
          <Link to="/contacts"> Back to contacts </Link>
        </div>
      )}

      {!isLogin && !token && (
        <div className={css.wrapper}>
          <h1 className={css.title}>Welcome to Phonebook.</h1>
          <p>Register to continue</p>
          <Link to="/login"> I already have an account </Link>
        </div>
      )}
    </>
  );
};

export default HomePage;
