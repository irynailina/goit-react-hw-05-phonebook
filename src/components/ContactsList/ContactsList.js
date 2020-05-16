import React from "react";
import ContactsItem from "../ContactsItem/ContactsItem";
import styles from "./contactsList.module.css";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slideTransition from "../../transitions/slide.module.css";

export default function ContactsList({ contacts = [], deleteContact }) {
  return (
    <div className={styles.contactsWrap}>
      <table className={styles.list}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Handle</th>
          </tr>
        </thead>
        <TransitionGroup component="tbody">
          {/* <tbody> */}
          {contacts.map((contact, idx) => (
            <CSSTransition
              key={contact.id}
              timeout={250}
              unmountOnExit
              classNames={slideTransition}
            >
              <ContactsItem
                key={contact.id}
                contact={contact}
                deleteContact={deleteContact}
                idx={idx}
              />
            </CSSTransition>
          ))}
          {/* </tbody> */}
        </TransitionGroup>
      </table>
    </div>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func.isRequired,
};
