import React from "react";

import styles from "./Navigation.module.css";
import AuthContext from "../context/auth-context";

const Navigation = ({ onLogin, onLogout }) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        console.log(ctx);
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
                  <button className={styles.button} onClick={onLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
