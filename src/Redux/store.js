import { contactsReducer } from "./Contacts/contactReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer, 
    }
})
