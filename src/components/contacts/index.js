// I used prettier for formating my code.

import "./contacts.css";
import Form from "./Form";
import List from "./List";
import { useState, useEffect } from "react";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const[filterText,setFilterText]=useState("");


  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="contactsContainer">
      <div className="contactsDiv">
        <Form addContact={setContacts} contacts={contacts} filterText={filterText} setFilterText={setFilterText} />
        <List contacts={contacts} filterText={filterText} />
      </div>
    </div>
  );
}

export default Contacts;
