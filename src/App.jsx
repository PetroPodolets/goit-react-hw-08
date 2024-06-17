import { useEffect } from 'react'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import "./App.css"
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/operations';

function App() {

  // const [contacts, setContacts] = useState(() => {
  //   const saveContact = localStorage.getItem("save-contact");

  //   return (saveContact !== null ? JSON.parse(saveContact) :

  //     [

  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

  //     ])

  // });

  // useEffect(() => {
  //   localStorage.setItem("save-contact", JSON.stringify(contacts))
  // }, [contacts]);

  // const [search, setSearch] = useState("");



  // const onAdd = (newDate) => {
  //   setContacts(() => {
  //     return [...contacts, newDate]
  //   })
  // }



  // const onDelete = (nameId) => {
  //   setContacts((present) => {
  //     return (present.filter((contact) => contact.id !== nameId));
  //   })
  // }



  // const contactsFilter = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(search.toLowerCase());
  // });


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className='containerPhoneBook'>
      <h1 className='title'>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App
