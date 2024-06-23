import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Button, TextField } from "@mui/material";
import css from "./RegistrationForm.module.css"
import toast from "react-hot-toast";

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
            .unwrap()
            .then(() => {
                toast.success("Registration is success!!!");
            })
            .catch(error => {
                toast.error(error);
            });

        actions.resetForm();
    };

    return (
        <Formik initialValues={{
            name: "",
            email: "",
            password: "",
        }}
            onSubmit={handleSubmit}
        >

            <Form className={css.form}>


                <Field className={css.inputs} as={TextField} id="name" label="Username"
                    variant="standard"
                    color="secondary" type="text" name="name" />



                <Field as={TextField} className={css.inputs} label="Email"
                    variant="standard"
                    color="secondary" id="email" type="email" name="email" />


                <Field as={TextField} className={css.inputs} type="password" id="password" label="Password"
                    variant="standard"
                    color="secondary" name="password" />


                <Button className={css.buttonRegister} type="submit" variant="contained" color="secondary">Register</Button>
            </Form>
        </Formik>
    )

}