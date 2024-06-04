import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <Card className={styles.form__main}>
      <form>
        <div className={styles.form__control}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div className={styles.form__control}>
          <label htmlFor="passord">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.action}>
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
