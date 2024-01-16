import css from './ContactList.module.css'

const ContactList = ({ contacts, handleDeleteContact }) => {
    return (
        <ul className={css.contactList}>
            {contacts.map(contact => (
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