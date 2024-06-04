import React from "react";

import styles from "./Navigation.module.css";

const Navigation = ({ onLogin, onLogout }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {onLogin && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {onLogin && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {onLogin && (
          <li>
            <button className={styles.button} onClick={onLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
