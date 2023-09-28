import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import styles from './Header.module.css';

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={styles.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>Products</a>
            </li>
            <li>
              <a href='/'>Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
