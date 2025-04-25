import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts, selectFilter } from '../../redux/selectors';
import toast from 'react-hot-toast';
import styles from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const [contactToDelete, setContactToDelete] = useState(null);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId)).then(() => {
      toast.success('Kin removed from the registry!');
      setContactToDelete(null);
    });
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.transmission}>
          <div className={styles.contactInfo}>
            <img
              src={
                contact.image
                  ? `/assets/images/${contact.image}`
                  : '/assets/images/placeholder.jpg'
              }
              alt={contact.name}
              className={styles.contactImage}
              onError={(e) => (e.target.src = '/assets/images/placeholder.jpg')}
            />
            <div>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
            </div>
          </div>
          <button
            className={styles.disconnectButton}
            onClick={() => setContactToDelete(contact.id)}
          >
            Remove Kin
          </button>
        </li>
      ))}

      {contactToDelete && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Are you sure you want to remove this kin from the registry?</p>
            <div className={styles.modalButtons}>
              <button
                onClick={() => handleDelete(contactToDelete)}
                className={styles.confirmButton}
              >
                Yes
              </button>
              <button
                onClick={() => setContactToDelete(null)}
                className={styles.cancelButton}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </ul>
  );
}

export default ContactList;
