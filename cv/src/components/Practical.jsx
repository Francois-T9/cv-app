import { useState } from "react";
import "../styles/practical.css";

function Practical() {
  // State to toggle the popup form
  const [toggleForm, setToggleForm] = useState(false);

  const openPracticalForm = () => {
    setToggleForm(!toggleForm);
  };

  // State to store the object containing form inputs
  const [practicalForm, setPracticalForm] = useState({
    companyName: "",
    companyLocation: "",
    startDate: "",
    endDate: "",
    isDeleted: false,
  });

  // Function to handle form input change
  const handlePracticalFormChange = (e) => {
    const { name, value } = e.target;
    setPracticalForm((prevState) => ({ ...prevState, [name]: value }));
  };

  // Array that stocks Practical objects
  const [practicalObjectList, setPracticalObjectList] = useState([
    {
      id: `practical-0`,
      companyName: "Meta",
      companyLocation: "Silicon Valley",
      startDate: "2014",
      endDate: "2017",
      isDeleted: false,
      isDefault: true,
    },
  ]);

  // State that hold the number of displayed practical fields
  const [numberPractical, setNumberPractical] = useState(0);
  // Function to handle the form submit and display

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setPracticalObjectList((prevList) => [
      ...prevList,
      {
        id: `practical-${numberPractical}`,
        companyName: practicalForm.companyName,
        companyLocation: practicalForm.companyLocation,
        startYear: practicalForm.startDate,
        endYear: practicalForm.endDate,
        isDeleted: practicalForm.isDeleted,
      },
    ]);
    setNumberPractical(numberPractical + 1);
    console.log(practicalObjectList);
    resetPracticalForm();
    practicalObjectList.map((object) => console.log(object.isDeleted));
  };

  // Function to delete practical display field on click
  const deletePracticalField = (practical) => {
    console.log(practical);
    setPracticalObjectList((prevList) =>
      prevList.map((section) =>
        section.id === practical.id ? { ...section, isDeleted: true } : section
      )
    );
  };

  const resetPracticalForm = () => {
    setPracticalForm((prevState) => ({
      ...prevState,
      companyName: "",
      companyLocation: "",
      startDate: "",
      endDate: "",
    }));
  };

  return (
    <div className="practical">
      <h1>Practical experience</h1>
      <button onClick={openPracticalForm}>Add practical experience</button>
      {toggleForm && (
        <div className="practical-form">
          <form action="" onSubmit={handleFormSubmit}>
            <label htmlFor="">
              Company name{" "}
              <input
                type="text"
                name="companyName"
                value={practicalForm.companyName}
                onChange={handlePracticalFormChange}
                required
              />
            </label>
            <label htmlFor="">
              Location{" "}
              <input
                type="text"
                name="companyLocation"
                value={practicalForm.companyLocation}
                onChange={handlePracticalFormChange}
                required
              />
            </label>
            <div className="practical-date">
              <label htmlFor="">
                Start Date{" "}
                <input
                  type="date"
                  name="startYear"
                  value={practicalForm.startYear}
                  onChange={handlePracticalFormChange}
                  required
                />
              </label>
              <label htmlFor="">
                End Date{" "}
                <input
                  type="date"
                  name="endYear"
                  value={practicalForm.endYear}
                  onChange={handlePracticalFormChange}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </div>

            {/* <button onClick={handleSubmit}>Submit</button> */}
            <button onClick={openPracticalForm}>Close form</button>
          </form>
        </div>
      )}

      {practicalObjectList[0].isDefault &&
        !practicalObjectList[0].isDeleted && (
          <div className="education" id={0} key={0}>
            <h2>{practicalObjectList[0].companyName}</h2>
            <h2>Location</h2>
            <p>{practicalObjectList[0].companyLocation}</p>
            <h2>Duration</h2>
            <p>
              From <span>{practicalObjectList[0].startDate.split("-")[0]}</span>{" "}
              To <span>{practicalObjectList[0].endDate.split("-")[0]}</span>
            </p>
            <button
              onClick={() => {
                deletePracticalField(practicalObjectList[0]);
              }}
            >
              Delete
            </button>
          </div>
        )}
      {isSubmitted &&
        practicalObjectList
          .filter((practical) => !practical.isDeleted)
          .map((practical) => (
            <div className="education" id={practical.id} key={practical.id}>
              <h2>{practical.companyName}</h2>
              <h2>Location</h2>
              <p>{practical.companyLocation}</p>
              <h2>Duration</h2>
              <p>
                From <span>{practical.startYear.split("-")[0]}</span> To{" "}
                <span>{practical.endYear.split("-")[0]}</span>
              </p>
              <button onClick={() => deletePracticalField(practical)}>
                Delete
              </button>
            </div>
          ))}
    </div>
  );
}

export default Practical;
