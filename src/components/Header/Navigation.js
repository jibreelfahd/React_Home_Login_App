import React from "react";

import styles from "./Navigation.module.css";

const Navigation = ({ onLogin, onLogout }) => {
  return (
    <nav className={styles.nav}>
      {onLogin && (
        <ul>
          <li>
            <a href="/">Users</a>
          </li>

          <li>
            <a href="/">Admin</a>
          </li>

          <li>
            <button className={styles.button} onClick={onLogout}>
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
