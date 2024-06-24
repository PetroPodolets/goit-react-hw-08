import { useId } from "react"
import css from './SearchBox.module.css'
import { useDispatch, useSelector } from "react-redux";

import { changeFilter } from '../../redux/filters/slice'
import { selectName } from "../../redux/contacts/selectors";
import { TextField } from "@mui/material";

export default function SearchBox() {


    const dispatch = useDispatch();

    const nameFilter = useSelector(selectName);

    const handleSearchChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };
    const searchId = useId();
    return (
        <div className={css.container}>


            <TextField htmlFor={searchId} className={css.searchInput} onChange={handleSearchChange} value={nameFilter} type="text" name="" id="standard-basic" label="Find contacts by name" variant="outlined" />

        </div>
    )
}