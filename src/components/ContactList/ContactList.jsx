import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { selectFilteredContacts } from '../../redux/contacts/slice';

export default function ContactList() {

    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.lists}>
            {contacts.map((contact) => (
                <Contact key={contact.id} {...contact} />
            ))}
        </ul>
    )
}
