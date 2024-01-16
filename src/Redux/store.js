import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./Contacts/contactReducer";

const rootReducer = combineReducers({
    contacts: contactsReducer
})

export const store = createStore(rootReducer)
