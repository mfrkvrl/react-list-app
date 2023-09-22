import "./list.css";

function List({ contacts }) {
  return (
    <div className="listDiv">
      <span className="listHeader">LIST</span>
      <ul className="nameList">
        {contacts.map((contact, i) => (
          <div className="card">
            <li key={i}>
              Name:{contact.fullname} Phone Number: {contact.phoneNumber}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;