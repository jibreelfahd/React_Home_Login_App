import React, { useContext } from "react";

import styles from "./Navigation.module.css";
import AuthContext from "../context/auth-context";

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={styles.nav}>
      {ctx.isLoggedIn && (
        <ul>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Admin</a>
          </li>
          <li>
            <button className={styles.button} onClick={ctx.onLogout}>
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
