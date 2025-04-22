import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <span className={css.name}>{contact.name}</span>
        <span className={css.number}>{contact.number}</span>
      </div>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
