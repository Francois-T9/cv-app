import "../styles/educational.css";
import { useState } from "react";
function Educational() {
  // Variable containing the state of the form toggle
  const [openForm, setOpenForm] = useState(false);

  // Function setting openForm boolean to 0/1 depending on button click
  const handleOpenForm = (e) => {
    e.preventDefault();
    setOpenForm(!openForm);
  };
  // Object containing the state of the form inputs

  const [educationalForm, setEducationalForm] = useState({
    schoolName: "",
    location: "",
    startYear: "",
    endYear: "",
    isDeleted: false,
  });

  // Function handling the changes on form input fields
  const handleEducationalFormChange = (e) => {
    const { name, value } = e.target;
    setEducationalForm((prevState) => ({ ...prevState, [name]: value }));
  };

  // Variable containing the number of educational experiences that have been submitted

  const [numberEducational, setNumberEducational] = useState(0);
  const [educationList, setEducationList] = useState([]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function displaying educational section on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setEducationList((prevList) => [
      ...prevList,
      {
        id: `education-${numberEducational}`,
        school: educationalForm.schoolName,
        location: educationalForm.location,
        startYear: educationalForm.startYear,
        endYear: educationalForm.endYear,
        isDeleted: educationalForm.isDeleted,
      },
    ]);
    setNumberEducational(numberEducational + 1);
    resetEducationForm();
  };

  const resetEducationForm = () => {
    setEducationalForm((prevState) => ({
      ...prevState,
      schoolName: "",
      location: "",
      startYear: "",
      endYear: "",
    }));
  };

  // Delete educational section
  const deleteEducationSection = (sectionToDelete) => {
    setEducationList((prevList) =>
      prevList.map((section) =>
        section.id === sectionToDelete.id
          ? { ...section, isDeleted: true }
          : section
      )
    );
  };

  return (
    <div className="educational">
      <h1>Educational experience</h1>
      <button className="add-education-btn" onClick={handleOpenForm}>
        Add educational experience
      </button>
      {openForm && (
        <div className="general-info-form">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
              School name{" "}
              <input
                type="text"
                name="schoolName"
                value={educationalForm.schoolName}
                onChange={handleEducationalFormChange}
                required
              />
            </label>
            <label htmlFor="">
              Location{" "}
              <input
                type="text"
                name="location"
                value={educationalForm.location}
                onChange={handleEducationalFormChange}
                required
              />
            </label>
            <div className="educational-date">
              <label htmlFor="">
                Start Date{" "}
                <input
                  type="date"
                  name="startYear"
                  value={educationalForm.startYear}
                  onChange={handleEducationalFormChange}
                  required
                />
              </label>
              <label htmlFor="">
                End Date{" "}
                <input
                  type="date"
                  name="endYear"
                  value={educationalForm.endYear}
                  onChange={handleEducationalFormChange}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </div>

            {/* <button onClick={handleSubmit}>Submit</button> */}
            <button onClick={handleOpenForm}>Close form</button>
          </form>
        </div>
      )}

      {isSubmitted &&
        educationList
          .filter((education) => !education.isDeleted)
          .map((education) => (
            <div className="education" id={education.id} key={education.id}>
              <h2>{education.school}</h2>
              <h2>Location</h2>
              <p>{education.location}</p>
              <h2>Duration</h2>
              <p>
                From <span>{education.startYear.split("-")[0]}</span> To{" "}
                <span>{education.endYear.split("-")[0]}</span>
              </p>
              <button
                onClick={() => {
                  deleteEducationSection(education);
                }}
              >
                Delete
              </button>
            </div>
          ))}
    </div>
  );
}

export default Educational;
