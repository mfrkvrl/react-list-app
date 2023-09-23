// used prettier for formating.

//imported useState hook and css file for this component
import { useState } from "react";
import "./form.css";

// Form component and its props
function Form({ addContact, contacts, filterText, setFilterText }) {
  const [form, setForm] = useState({ fullname: "", phoneNumber: "" });//form element initilized as an object with fullname and phonenumber variables

  // using setForm function to change forms value
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //work when the form submitted
  const onsubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phoneNumber === "") {
      return false;
    }
    
    addContact([...contacts, form]);
    setForm({ fullname: "", phoneNumber: "" });
  };
  return (
    <form className="form" onSubmit={onsubmit}>
      <div className="formDiv">
        <div>
          <input
            name="fullname"
            className="formInput"
            placeholder="Name"
            value={form.fullname}
            onChange={onChangeInput}
          ></input>
        </div>
        <div>
          <input
            name="phoneNumber"
            className="formInput"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={onChangeInput}
          ></input>
        </div>

        <div>
          <button className="formButton">Add</button>
        </div>
      </div>
      <div className="filterDiv">
        <input
          name="filter"
          className="formInput"
          placeholder="Filter"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        ></input>
      </div>
    </form>
  );
}

export default Form;
