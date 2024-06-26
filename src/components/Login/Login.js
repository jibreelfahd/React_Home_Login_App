import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import AuthContext from "../context/auth-context";
import InputForm from "../UI/InputForm/InputForm";

import styles from "./Login.module.css";

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

  // @desc creating email and input ref to be able to use the focus external translator
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const handler = setTimeout(() => {
      setIsFormValid(emailIsValid && passwordIsValid);
    }, 500);

    // @CLEANUP FUNCTION
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

    if (isFormValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }

    if (isFormValid) {
      emailState.value = "";
      passwordState.value = "";
    }
  };

  return (
    <Card className={styles.form__main}>
      <form onSubmit={submitHandler}>
        <InputForm
          ref={emailInputRef}
          id="email"
          label="Email"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onBlur={validateEmail}
          onChange={emailChangeHandler}
        />
        <InputForm
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onBlur={validatePassword}
          onChange={passwordChangeHandler}
        />
        <div className={styles.action}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
