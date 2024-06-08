import React, { useState, useEffect, useReducer, useContext } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import styles from "./Login.module.css";
import AuthContext from "../context/auth-context";

// desc: reducer function for email reducer state
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

// desc: reducer function for password reducer state
const passwordReducer = (state, action) => {
  if (action.type === "USER_PASSWORD") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "PASSWORD_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [isEmailValid, setIsEmailValid] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [isPasswordValid, setIsPasswordValid] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // @desc: email reducer hook
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  // @desc: password reducer hook
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // @desc: useEffect hook for handling setIsFormValid to make sure the latest state snapshot is gotten
  // to set the form validity to be valid

  //getting app wide context to lift state up
  const authCtx = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const handler = setTimeout(() => {
      setIsFormValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [emailIsValid, passwordIsValid]);

  // @desc: function upon email change
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  // @desc: function upon password change
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_PASSWORD", val: event.target.value });
  };

  // @desc: function to validate the user email
  const validateEmail = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  // @desc: function to validate the user password
  const validatePassword = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  // @desc: form submit handler function and also for lifting the state
  const submitHandler = (event) => {
    event.preventDefault();

    authCtx.onLogin(emailState.value, passwordState.value);

    emailState.value = "";
    passwordState.value = "";
  };

  return (
    <Card className={styles.form__main}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.form__control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmail}
          />
        </div>
        <div
          className={`${styles.form__control} ${
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="passord">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
