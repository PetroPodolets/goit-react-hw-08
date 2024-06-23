import { Formik, Form, ErrorMessage, Field } from "formik";

import { useId } from "react";
import * as Yup from "yup";
import css from './ContactForm.module.css'
import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import toast from "react-hot-toast";

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
        dispatch(addContact(values)).unwrap()
            .then(() => {
                toast.success("Success!!!");
            })
            .catch(error => {
                toast.error(error);
            });
        actions.resetForm();
    }


    return (
        <>
            <Formik initialValues={initialValues}
                validationSchema={UserSchema}
                onSubmit={handleSubmit}
            >


                <Form className={css.form}>

                    <div className={css.container}>

                        <Field name="name">
                            {({ field, form }) => (
                                <TextField
                                    className={css.input}
                                    {...field}
                                    label="Name"
                                    variant="standard"
                                    id={nameId}
                                    error={form.touched.name && Boolean(form.errors.name)}
                                    helperText={form.touched.name && form.errors.name}
                                />
                            )}
                        </Field>


                    </div>
                    <div className={css.container}>

                        <Field name="number">
                            {({ field, form }) => (
                                <TextField className={css.input}
                                    {...field}
                                    label="Number"
                                    variant="standard"

                                    id={numberId}
                                    error={form.touched.name && Boolean(form.errors.name)}
                                    helperText={form.touched.name && form.errors.name}
                                />
                            )}
                        </Field>

                    </div>
                    <button className={css.button} type="submit">Add Contact</button>
                </Form>
            </Formik >
        </>
    )
}
