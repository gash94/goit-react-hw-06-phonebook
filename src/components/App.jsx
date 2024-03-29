import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import css from "./App.module.css";
const App = () => {
    return (
        <div className={css.app}>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <div className={css.contactsBox}>
                <Filter />
                <ContactList />
            </div>
        </div>
    );
};

export default App;
