import "./form.css"
function Form() {
    return (
      <div className="formDiv">
        <div>
          <input className="formInput" placeholder="Name"></input>
        </div>
        <div>
          <input className="formInput" type="phone" placeholder="Phone Number"></input>
        </div>
        <div>
          <button className="formButton">Add</button>
        </div>
      </div>
    );
  }
  
  export default Form;
  