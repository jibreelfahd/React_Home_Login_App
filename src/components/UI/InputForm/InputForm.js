import React, { useRef, useImperativeHandle } from "react";

import styles from "./InputForm.module.css";

const InputForm = React.forwardRef(
  ({ isValid, id, label, type, value, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    const activateFocus = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activateFocus,
      };
    });

    return (
      <>
        <div
          className={`${styles.form__control} ${
            isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor={id}>{label}</label>
          <input
            ref={inputRef}
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      </>
    );
  }
);

export default InputForm;
