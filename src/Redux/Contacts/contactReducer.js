import { createSlice } from "@reduxjs/toolkit";


const initialSatate = {
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
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

// Генератори екшенів
export const { addContact, removeContact, setFilter } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// export const contactsReducer = (state = initialSatate, action) => {
//     switch (action.type) {
//         case 'contacts/addContact': {
//             return {...state, contacts: [...state.contacts, action.payload]}
//         }
//         case 'contacts/removeContact': {
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.id !== action.payload)
//             }
//         }
//         case 'contacts/setFilter': {
//             return {...state, filter: action.payload}
//         }
//         default:
//             return state
//         }
// }