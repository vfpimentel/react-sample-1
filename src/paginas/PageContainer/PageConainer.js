import { Outlet } from "react-router-dom";
import styles from './PageContainer.module.css';

export const PageContainer = () => {
  return (
    <main className={styles.main} >
      <Outlet />
    </main>
  );
};
