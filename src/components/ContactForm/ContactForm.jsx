import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

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
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Ідентифікатор пілота
        <input
          type="text"
          name="name"
          required
          className={css.input}
          placeholder="Введіть ідентефікатор"
        />
      </label>
      <label className={css.label}>
        Частота гіперзв’язку
        <input
          type="tel"
          name="number"
          required
          className={css.input}
          placeholder="Введіть частоту"
        />
      </label>
      <button type="submit" className={css.button}>
        Зареєструвати нового союзника
      </button>
    </form>
  );
};

export default ContactForm;
