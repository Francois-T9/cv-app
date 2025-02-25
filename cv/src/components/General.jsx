import { useState } from "react";
import "../styles/general.css";

function General() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


const handleFirstNameChange = (e) => {
   setFirstName(e.target.value);
}
const handleLasttNameChange = (e) => {
  setLastName(e.target.value);
}


  return (
    <div className="general">
      <h1>General information</h1>

      <label >First name:<input type="text" value={firstName} onChange={handleFirstNameChange} /></label>
      <label>Last name: <input type="text" value={lastName} onChange={handleLasttNameChange}/></label>
      <button>Submit</button>
    </div>
  );
}

export default General;
