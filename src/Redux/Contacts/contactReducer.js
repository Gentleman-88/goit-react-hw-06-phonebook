import { createSlice } from "@reduxjs/toolkit";


const initialSatate = {
    contacts: [],
    filter: ""
}


const contactsSlice = createSlice({

    name: "contacts",

    initialState: initialSatate,

    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload);
        },
        removeContact(state, action) {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload
            )
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
