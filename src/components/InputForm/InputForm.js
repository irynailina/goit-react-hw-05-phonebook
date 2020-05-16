import React from "react";
import styles from "./inputForm.module.css";
import PropTypes from "prop-types";

export default function InputForm({
  value,
  handleChange,
  placeholder,
  type,
  name,
}) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleChange}
    ></input>
  );
}

InputForm.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
