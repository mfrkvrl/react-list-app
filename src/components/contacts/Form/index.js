import { useState } from "react";
import "./form.css";

function Form({addContact, contacts}) {
  const [form, setForm] = useState({ fullname: "", phoneNumber: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phoneNumber === "") {
      return false;
    }
   
    addContact([...contacts, form])
    setForm({fullname:"", phoneNumber:""})

  };
  return (
    <form className="formDiv" onSubmit={onsubmit}>
     
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
    </form>
  );
}

export default Form;
