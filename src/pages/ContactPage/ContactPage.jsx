import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
// import { selectLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox"

export default function ContactPage() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <ContactForm />
            <SearchBox />

            <PageTitle>Your Contacts</PageTitle>
            <ContactList />

        </>
    );
}
