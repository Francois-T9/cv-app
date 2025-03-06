import { useState } from "react";
import "../styles/general.css";

function General() {
  // Object containing the state of input fields of the form
  const [generalForm, setGeneralForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Function toggling the update of the form input fields
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setGeneralForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to open or close the form
  const [toggleForm, setToggleForm] = useState(false);

  const popupForm = (e) => {
    e.preventDefault();
    setToggleForm(!toggleForm);
  };

  // Displaying object based on user inputs and submit
  const [displayForm, setDisplayForm] = useState({
    displayName: "",
    displayEmail: "",
    displayPhone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setDisplayForm((prevState) => ({
      ...prevState,
      displayName: generalForm.firstName + " " + generalForm.lastName,
      displayEmail: generalForm.email,
      displayPhone: generalForm.phone,
    }));
  };

  return (
    <div className="general">
      <h1>General information</h1>
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
                name="firstName"
                value={generalForm.firstName}
                onChange={handleFormChange}
              />
            </label>
            <label htmlFor="">
              Last name :{" "}
              <input
                type="text"
                name="lastName"
                value={generalForm.lastName}
                onChange={handleFormChange}
              />
            </label>
            <label htmlFor="">
              Email :{" "}
              <input
                type="email"
                value={generalForm.email}
                onChange={handleFormChange}
                name="email"
              />
            </label>
            <label htmlFor="">
              Phone :{" "}
              <input
                type="tel"
                value={generalForm.phone}
                onChange={handleFormChange}
                name="phone"
              />
            </label>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={popupForm}>Close form</button>
          </form>
        </div>
      )}

      <h2>Full name</h2>
      <p>{displayForm.displayName}</p>
      <h2>Email</h2>
      <p>{displayForm.displayEmail}</p>
      <h2>Phone</h2>
      <p>{displayForm.displayPhone}</p>
    </div>
  );
}

export default General;
