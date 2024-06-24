import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
// import { selectLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox"
import css from './ContactPage.module.css'

export default function ContactPage() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.container}>
            <ContactForm />
            <SearchBox />

            <PageTitle>Your Contacts</PageTitle>
            <ContactList />

        </div>
    );
}
