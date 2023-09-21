// I used prettier for formating my code.

import "./contacts.css"
import Form from "./Form";
import List from "./List";

function Contacts() {
  return (
    <div className="contactsDiv">
      <List />
      <Form />
    </div>
  );
}
export default Contacts;