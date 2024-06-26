import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { selectContacts, selectName } from './selectors';



const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },

    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, state => {
                state.loading = true;

            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addContact.pending, state => {
                state.loading = true;

            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteContact.pending, state => {
                state.loading = true;

            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.items.findIndex(contact => contact.id === action.payload.id)
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
})

export const selectFilteredContacts = createSelector(
    [selectContacts, selectName],
    (contatcs, textFilter) => {
        return contatcs.filter(contact =>
            contact.name.toLowerCase().includes(textFilter.toLowerCase())
        );
    }
);

export default contactsSlice.reducer;