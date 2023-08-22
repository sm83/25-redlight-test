import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

import styles from '../RootPage/RootPage.module.css';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchLocalSession, fetchUserData } from '../../store/sessionSlice';

const Layout = () => {
  const dispatch = useAppDispatch();

  if (localStorage.getItem('currentSession') != undefined) {
    useEffect(() => {
      const currentSession = localStorage.getItem('currentSession');

      if (currentSession != null) {
        dispatch(fetchLocalSession(JSON.parse(currentSession)));
        dispatch(fetchUserData(JSON.parse(currentSession).id));
      }
    }, [dispatch]);
  }

  return (
    <>
      <div className={styles.App}>
        <Header />
        <div className={styles.contentArea}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
