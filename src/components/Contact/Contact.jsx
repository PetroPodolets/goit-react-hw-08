import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

import css from './Contact.module.css'
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";



export default function Contact({ name, number, id }) {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id))
            .unwrap()
            .then(() => {
                toast.success("Delete is success!!!");
            })
            .catch(error => {
                toast.error(error);
            });
    }


    return (
        <li className={css.contactList}>
            <div className={css.listContainer}>

                <h3 className={css.name}><RiContactsFill className={css.svg} />{name}</h3>
                <p className={css.phoneNumber}><FaPhoneAlt className={css.svg} /> {number}</p>

            </div>
            <button className={css.btnDelete} onClick={handleDelete}>Delete</button>
        </li>
    )

}
