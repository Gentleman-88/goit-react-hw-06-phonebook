import { useEffect, useState } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
      const stringifiedContacts = JSON.stringify(contacts);
      localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts])


  const handleAddContact = formData => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts!`);
      return;
    }

    setContacts(prevState => [...contacts, { ...formData, id: nanoid() }])
  };

  const handleChangeFilter = event => {
    const value = event.target.value;
    setFilter(value)
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState => (contacts.filter(contact => contact.id !== contactId)))
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <div>
      <AddContactForm handleAddContact={handleAddContact} />
      <Filter
        filter={filter}
        handleChangeFilter={handleChangeFilter}
      />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}