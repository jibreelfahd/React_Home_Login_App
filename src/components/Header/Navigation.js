import React from "react";

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <button className={styles.button}>Logout</button>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;