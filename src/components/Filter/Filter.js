import React from "react";
import styles from "./filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ value, onChangeFilter }) => (
  <>
    <div className={styles.findWrap}>
      <label className={styles.search}>Find contacts by name:</label>
      <input
        className={styles.searchInput}
        // type={type}
        value={value}
        onChange={onChangeFilter}
      ></input>
    </div>
  </>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
