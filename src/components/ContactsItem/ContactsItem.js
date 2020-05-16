import React from "react";
import styles from "./contactsItem.module.css";
import PropTypes from "prop-types";

const ContactsItem = ({
  contact: { id, name, number },
  deleteContact,
  idx,
}) => (
  <>
    <tr className={idx % 2 === 0 ? styles.trEven : styles.trOdd}>
      <td>{name}</td>
      <td>{number}</td>
      <td>
        <button className={styles.deleteBtn} id={id} onClick={deleteContact}>
          Delete
        </button>
      </td>
    </tr>
  </>
);

export default ContactsItem;

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};
