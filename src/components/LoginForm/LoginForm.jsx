import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { Button, TextField } from "@mui/material";
import css from "./LoginForm.module.css"

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
            .unwrap()
            .then(() => {
                toast.success("Log in is success!!!");
            })
            .catch(error => {
                toast.error(error);
            });

        actions.resetForm();
    };

    return (
        <Formik initialValues={{
            email: "",
            password: "",
        }}
            onSubmit={handleSubmit}
        >

            <Form className={css.loginForm}>
                <Field as={TextField} className={css.inputs} label="Email"
                    variant="standard"
                    color="success" id="email" type="email" name="email" />


                <Field as={TextField} className={css.inputs} type="password" id="password" label="Password"
                    variant="standard"
                    color="success" name="password" />
                <Button className={css.buttonLogin} type="submit" variant="contained" color="success">
                    Log in
                </Button>
            </Form>

        </Formik>
    );
}