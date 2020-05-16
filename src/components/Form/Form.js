import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import InputForm from "../InputForm/InputForm";
import styles from "./form.module.css";

class Form extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.props.getContact(newContact);
    this.reset();
  };

  nameId = uuidv4();

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.name} htmlFor={uuidv4()}>
            Name:
          </label>
          <InputForm
            type="tel"
            placeholder="Enter name"
            value={name}
            handleChange={this.handleChange}
            id={this.nameId}
            name="name"
          />
          <label className={styles.number} htmlFor={this.nameId}>
            Number:
          </label>
          <InputForm
            type="tel"
            placeholder="Enter number"
            value={number}
            handleChange={this.handleChange}
            id={this.nameId}
            name="number"
          />
          <button className={styles.addButton} type="submit">
            Add
          </button>
        </form>
      </>
    );
  }
}

export default Form;
