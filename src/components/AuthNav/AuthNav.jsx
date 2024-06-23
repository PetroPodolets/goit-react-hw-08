import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
    return (
        <div>
            <NavLink to="/register">

                <Button color="secondary"> Register</Button>
            </NavLink>
            <NavLink to="/login">

                <Button color="success">Log In</Button>
            </NavLink>
        </div>);
}