import React from "react";
import Navigation from "./Navigation";

import styles from './Header.module.css';

const Header = (props) => {
    return (
      <header className={styles.header}>
        <h1>A Typical Page</h1>
        <Navigation onLogin={props.onLogin} onLogout={props.onLogout}/>
      </header>
    )
};

export default Header;