import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css"
import { Button } from "@mui/material";
import toast, { Toaster } from 'react-hot-toast';




export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogOut = () => {
        dispatch(logOut())
            .unwrap()
            .then(() => {
                toast.success("LogOut is success")
            })
            .catch(error => {
                toast.error(error);
            });

    }

    return (
        <div className={css.userMenu}>
            <p className={css.textUserMenu}>Welcome, {user.name}</p>

            <Button className={css.buttonUserMenu} color="error" onClick={handleLogOut}>Logout</Button>
            <Toaster />
        </div>
    );
}
