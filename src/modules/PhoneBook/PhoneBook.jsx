import { useSelector } from 'react-redux';

import Loader from 'shared/components/Loader/Loader';
import ContactForm from 'modules/PhoneBook/ContactForm/ContactForm';
import ContactsList from 'modules/PhoneBook/ContactsList/ContactsList';
import Filter from 'modules/PhoneBook/Filter/Filter';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import css from './PhoneBook.module.css';

export const PhoneBook = () => {
  const isContacts = Boolean(useSelector(getFilteredContacts).length);
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />

      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}

      {isContacts && <ContactsList />}

      {!isContacts && !isLoading && (
        <p className={css.text}>No contacts in list</p>
      )}
    </div>
  );
};
