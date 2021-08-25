
import './App.css';
import React, { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import shortid from 'shortid';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ' ',
  }


  formSubmit = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    }

    const equalContact = this.state.contacts.find(
      c => c.name === contact.name
    );

    if (equalContact) return alert(`${name} is already in contacts`);
    
    this.setState(({contacts})=> ({
        contacts: [contact, ...contacts],
      }));
    
  }
    
  

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const toLowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(toLowerCaseFilter)
    });
  }

  onDelete = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id)
    });
  }
  

  render() {
    // const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <ContactList
          contacts={ this.filterContacts()}
          onDelete={ this.onDelete}
        />
        
      </div >
    )
  }
}

export default App;
