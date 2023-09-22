// I used prettier for formating my code.

import "./contacts.css";
import Form from "./Form";
import List from "./List";
import { useState, useEffect } from "react";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="contactsContainer">
      <div className="contactsDiv">
        <Form addContact={setContacts} contacts={contacts} />
        <List contacts={contacts} />
      </div>
    </div>
  );
}

export default Contacts;
