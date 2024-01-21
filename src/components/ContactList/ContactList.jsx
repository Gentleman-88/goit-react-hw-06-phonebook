import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css'
import { removeContact } from 'Redux/Contacts/contactReducer';

const ContactList = () => {

    const filter = useSelector(store => store.contacts.filter)
    const dispatch = useDispatch()
    const contacts = useSelector(store => store.contacts.contacts)


    const handleDeleteContact = contactId => {
        dispatch(removeContact(contactId))
    };


    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );


    return (
        <ul className={css.contactList}>
            {filteredContacts.map(contact => (
                <li key={contact.id}
                    className={css.contactListItem}>
                    {contact.name}: {contact.number}
                    <button
                        className={css.deleteButton}
                        onClick={() => handleDeleteContact(contact.id)}
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    );
}

export { ContactList };