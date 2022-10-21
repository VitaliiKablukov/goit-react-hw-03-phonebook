import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './App.styled';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  onSubmitForm = data => {
    const findName = this.state.contacts.filter(el => el.name === data.name);
    if (findName.length > 0) {
      return alert(`${data.name} is already contacts`);
    } else {
      const user = { id: nanoid(), name: data.name, number: data.number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, user],
      }));
    }
  };
  filterInputText = text => {
    const filterText = text.toLowerCase();
    this.setState(() => ({ filter: filterText }));
  };

  onFilter() {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }
  deletecontact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };
  render() {
    const visbleContacts = this.onFilter();
    return (
      <Section>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.onSubmitForm} />
        <h2>Contacts</h2>
        <Filter filterInputText={this.filterInputText} />
        <ContactList
          visbleContacts={visbleContacts}
          deletecontact={this.deletecontact}
        />
      </Section>
    );
  }
}
