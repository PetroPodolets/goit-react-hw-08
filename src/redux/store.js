import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contactsSlice'
import searchReducer from './filtersSlice';


export const store = configureStore({
    reducer: {
        contacts: contactsReduser,
        filters: searchReducer,

    }
})