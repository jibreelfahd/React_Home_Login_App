import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import styles from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setIsFormValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmail = () => {
    setIsEmailValid(enteredEmail.includes("@"));
  };

  const validatePassword = () => {
    setIsPasswordValid(enteredEmail.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onLogin(enteredEmail, enteredPassword);

    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <Card className={styles.form__main}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.form__control} ${
            isEmailValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmail}
          />
        </div>
        <div
          className={`${styles.form__control} ${
            isPasswordValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="passord">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePassword}
          />
        </div>
        <div className={styles.action}>
          <Button type="submit" disabled={!isFormValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
