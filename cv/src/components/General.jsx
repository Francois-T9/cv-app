import { useState } from "react";
import "../styles/general.css";

function General() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const [toggleForm, setToggleForm] = useState(false);
  const handleLasttNameChange = (e) => {
    setLastName(e.target.value);
  };
  const popupForm = (e) => {
    e.preventDefault();
    setToggleForm(!toggleForm);
  };

  return (
    <div className="general">
      <button onClick={popupForm} className="open-form-btn">
        Open form
      </button>

      {toggleForm && (
        <div className="general-info-form">
          <form action="">
            <label htmlFor="">
              First name{" "}
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </label>
            <label htmlFor="">
              Last name :{" "}
              <input
                type="text"
                value={lastName}
                onChange={handleLasttNameChange}
              />
            </label>
            <button onClick={popupForm}>Submit</button>
            <button onClick={popupForm}>Close form</button>
          </form>
        </div>
      )}

      <div className="display-general-info">
        <h2>Full name</h2>
        <p>
          {firstName} {lastName}
        </p>
      </div>
    </div>
  );
}

export default General;
