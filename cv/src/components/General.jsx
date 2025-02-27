import { useState } from "react";
import "../styles/general.css";

function General() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [toggleForm, setToggleForm] = useState(false);

  const [displayName, setDisplayName] = useState("");
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayPhone, setDisplayPhone] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLasttNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const popupForm = (e) => {
    e.preventDefault();
    setToggleForm(!toggleForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayName(firstName + " " + lastName);
    setDisplayEmail(email);
    setDisplayPhone(phone);
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
            <label htmlFor="">
              Email :{" "}
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label htmlFor="">
              Phone :{" "}
              <input type="tel" value={phone} onChange={handlePhoneChange} />
            </label>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={popupForm}>Close form</button>
          </form>
        </div>
      )}
      <h2>Full name</h2>
      <p>{displayName}</p>
      <h2>Email</h2>
      <p>{displayEmail}</p>
      <h2>Phone</h2>
      <p>{displayPhone}</p>
    </div>
  );
}

export default General;
