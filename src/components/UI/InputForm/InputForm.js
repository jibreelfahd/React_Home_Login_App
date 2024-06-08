import React from "react";

import styles from "./InputForm.module.css";

const InputForm = ({ isValid, id, label, type, value, onChange, onBlur }) => {
  return (
    <>
      <div
        className={`${styles.form__control} ${
          isValid === false ? styles.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </>
  );
};

export default InputForm;
