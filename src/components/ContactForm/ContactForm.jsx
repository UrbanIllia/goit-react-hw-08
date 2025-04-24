import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';
import { selectContacts } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} вже є в реєстрі.`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.dataEntry}>
      <label className={css.inputLabel}>
        Ідентифікатор пілота
        <input
          type="text"
          name="name"
          required
          className={css.inputField}
          placeholder="Введіть ідентифікатор"
        />
      </label>
      <label className={css.inputLabel}>
        Частота гіперзв’язку
        <input
          type="tel"
          name="number"
          required
          className={css.inputField}
          placeholder="Введіть частоту"
        />
      </label>
      <button type="submit" className={css.submitButton}>
        Зареєструвати нового союзника
      </button>
    </form>
  );
};

export default ContactForm;
