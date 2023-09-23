// used prettier for formating.

//imported css file for this component
import "./list.css";

// List component and its props
function List({ contacts, filterText }) {
//filters contact for filterText 
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase()),
    );
  });

  
  return (
    <div className="listDiv">
      <span className="listHeader">LIST</span>
      <ul className="nameList">
        {filtered.map((contact, i) => (
          <div className="card">
            <li key={i}>
              <span className="listElementHeader">|Name:</span>{" "}
              {contact.fullname}
              <span className="listElementHeader">|Phone Number: </span>{" "}
              {contact.phoneNumber}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;
