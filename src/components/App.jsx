import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddContactForm } from './AddContactForm/AddContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  
  const dispatch = useDispatch()
  const contacts = useSelector(store => store.contacts.contacts)
  const filter = useSelector(store => store.contacts.filter)


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

    const finalProfile = {
      ...formData,
      id: Math.random().toString()
    }

    const action = {
      type: "contacts/addContact",
      payload: finalProfile
    }
    dispatch(action)
  };

  const handleDeleteContact = contactId => {
    const action = {
      type: "contacts/removeContact",
      payload: contactId
    }
    dispatch(action)
  };

  const handleChangeFilter = event => {
    const value = event.target.value;
    const action = {
      type: "contacts/setFilter",
      payload: value
    }
    dispatch(action)
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