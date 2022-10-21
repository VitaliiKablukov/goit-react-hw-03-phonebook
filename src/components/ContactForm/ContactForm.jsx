import { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, Form, Button } from './ContactForm.styled';
export class ContactForm extends Component {
  state = { name: '', number: '' };

  submitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    e.target.reset();
  };

  changeNameNumber = e => {
    const changeText = e.target.value;
    const inputName = e.target.name;
    this.setState(() => ({ [inputName]: changeText }));
  };
  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <Label htmlFor="name">Name:</Label>
        <Input
          onChange={this.changeNameNumber}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="number">Number:</Label>
        <Input
          onChange={this.changeNameNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
