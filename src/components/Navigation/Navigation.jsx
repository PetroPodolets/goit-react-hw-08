import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css"
import { Button } from "@mui/material";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const getButtonStyle = (isActive) => ({
        color: isActive ? 'blue' : 'inherit',
        fontWeight: isActive ? 'bold' : 'normal',
    });
    return (
        <nav>

            <NavLink to="/" className={({ isActive }) => (isActive ? css.active : "")}>
                {({ isActive }) => (
                    <Button style={getButtonStyle(isActive)}>Home</Button>
                )}
            </NavLink>

            {isLoggedIn && (
                <NavLink to="/contacts" className={({ isActive }) => (isActive ? css.active : "")}>
                    {({ isActive }) => (
                        <Button style={getButtonStyle(isActive)}>Contacts</Button>
                    )}
                </NavLink>
            )}
        </nav>
    );
}

