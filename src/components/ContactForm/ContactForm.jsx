import { Formik, Form, ErrorMessage, Field } from "formik";

import { useId } from "react";
import * as Yup from "yup";
import css from './ContactForm.module.css'
import { addContact } from '../../redux/contactsOps';
import { useDispatch } from "react-redux";

const UserSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too long!").required("Required"),
    number: Yup.string().max(13, "Too long!").required("Required")
})

const initialValues = {
    name: "",
    number: "",
}




export default function ContactForm() {

    const nameId = useId();
    const numberId = useId();
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm()
    };


    return (
        <>
            <Formik initialValues={initialValues}
                validationSchema={UserSchema}
                onSubmit={handleSubmit}
            >


                <Form className={css.form}>

                    <div className={css.container}>
                        <label htmlFor={nameId}>Name</label>
                        <Field className={css.input} type="text" name="name" id={nameId} />
                        <ErrorMessage className={css.error} name="name" component="span" />

                    </div>
                    <div className={css.container}>
                        <label htmlFor={numberId}>Number</label>
                        <Field className={css.input} type="" name="number" id={numberId} />
                        <ErrorMessage className={css.error} name="number" component="span" />
                    </div>
                    <button className={css.button} type="submit">Add Contact</button>
                </Form>
            </Formik >
        </>
    )
}
