import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const imagePath = contact.image
    ? `/assets/images/${contact.image}`
    : '/assets/images/placeholder.jpg';

  return (
    <li className={css.transmission}>
      <div className={css.contactInfo}>
        <img
          src={imagePath}
          alt={contact.name}
          className={css.contactImage}
          onError={(e) => (e.target.src = '/assets/images/placeholder.jpg')}
        />
        <div>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        className={css.disconnectButton}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Розірвати зв’язок
      </button>
    </li>
  );
};

export default Contact;
