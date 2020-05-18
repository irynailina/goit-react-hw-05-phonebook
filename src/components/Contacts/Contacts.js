import React, { Component } from "react";
import Form from "../Form/Form";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import styles from "./contacts.module.css";
import { CSSTransition } from "react-transition-group";
import popTransition from "../../transitions/pop.module.css";
import popupTransition from "../../transitions/popup.module.css";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class Contacts extends Component {
  state = {
    contacts: [],
    filter: "",
    visible: false,
    isShow: false,
  };

  componentDidMount() {
    this.setState({
      contacts: this.filterContacts(),
      isShow: !this.state.isShow,
    });
  }

  getContact = (newContact) => {
    const { name } = newContact;
    const newName = this.state.contacts.some(
      (contact) => contact.name === name
    );
    if (!newName) {
      this.setState((prevstate) => {
        const addContacts = [...prevstate.contacts, newContact];
        localStorage.setItem("contacts", JSON.stringify(addContacts));
        return { contacts: addContacts };
      });
    } else this.createNotification();
  };

  deleteContact = (e) => {
    const id = e.target.id;
    this.setState((prev) => {
      const resultContacts = prev.contacts.filter(
        (contact) => contact.id !== id
      );
      localStorage.setItem("contacts", JSON.stringify(resultContacts));
      return {
        contacts: resultContacts,
      };
    });
  };

  handleChangeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;

    const localStorageContacts = localStorage.getItem("contacts")
      ? JSON.parse(localStorage.getItem("contacts")).filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];
    const set = new Set([...localStorageContacts]);
    const set3 = new Set([...contacts]);
    const set2 = [
      ...new Set([...set]),
      ...new Set([...set3]),
    ].filter((contact) => set.has(contact));
    return [...set2];
  };

  createNotification = () => {
    NotificationManager.info("This contact is already exist!");
  };

  render() {
    const { filter, contacts, isShow } = this.state;

    return (
      <>
        <div className={styles.container}>
          <div className={styles.header}>
            <CSSTransition
              in={!isShow}
              timeout={3000}
              classNames={popTransition}
            >
              <h2 className={styles.title}>Phonebook</h2>
            </CSSTransition>
          </div>
          <div className={styles.formWrap}>
            <Form getContact={this.getContact} />
          </div>
          <h2 className={styles.contacts}>Contacts</h2>
          <CSSTransition
            in={contacts.length > 1}
            timeout={250}
            classNames={popupTransition}
            unmountOnExit
          >
            <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
          </CSSTransition>
          <ContactsList
            contacts={this.filterContacts()}
            deleteContact={this.deleteContact}
          />
        </div>
        {
          <NotificationContainer timeout={500}>
            <button className="btn btn-info"></button>
          </NotificationContainer>
        }
      </>
    );
  }
}

export default Contacts;
