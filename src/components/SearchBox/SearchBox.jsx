import { useId } from "react"
import css from './SearchBox.module.css'
import { useDispatch, useSelector } from "react-redux";

import { changeFilter } from '../../redux/filters/slice'
import { selectName } from "../../redux/contacts/selectors";

export default function SearchBox() {


    const dispatch = useDispatch();

    const nameFilter = useSelector(selectName);

    const handleSearchChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };
    const searchId = useId();
    return (
        <div className={css.container}>
            <label htmlFor={searchId}>Find contacts by name</label>
            <input className={css.searchInput} onChange={handleSearchChange} value={nameFilter} type="text" name="" /*id={searchId}*/ />
        </div>
    )
}