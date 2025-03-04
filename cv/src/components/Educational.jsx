import "../styles/educational.css";
import { useState } from "react";
function Educational() {
  const [openForm, setOpenForm] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [location, setLocation] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const [numberEducational, setNumberEducational] = useState(0);
  const [educationList, setEducationList] = useState([]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // const [displaySchool, setDisplaySchool] = useState("");
  // const [displayLocation, setDisplayLocation] = useState("");
  // const [displayStartYear, setDisplayStartYear] = useState("");
  // const [displayEndYear, setDisplayEndYear] = useState("");

  const handleOpenForm = (e) => {
    e.preventDefault();
    setOpenForm(!openForm);
  };

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleStartYearChange = (e) => {
    setStartYear(e.target.value);
  };
  const handleEndYearChange = (e) => {
    setEndYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setEducationList((prevList) => [
      ...prevList,
      {
        id: `education-${numberEducational}`,
        school: schoolName,
        location: location,
        startYear: startYear,
        endYear: endYear,
      },
    ]);
    setNumberEducational(numberEducational + 1);

    setSchoolName("");
    setLocation("");
    // setStartYear
  };

  const deleteEducatiionField = (array, index) => {
    array.splice(index, 1);
    console.log(array);
    console.log(index);
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
                value={schoolName}
                onChange={handleSchoolNameChange}
                required
              />
            </label>
            <label htmlFor="">
              Location{" "}
              <input
                type="text"
                value={location}
                onChange={handleLocationChange}
                required
              />
            </label>
            <div className="educational-date">
              <label htmlFor="">
                Start Date{" "}
                <input
                  type="date"
                  value={startYear}
                  onChange={handleStartYearChange}
                  required
                />
              </label>
              <label htmlFor="">
                End Date{" "}
                <input
                  type="date"
                  value={endYear}
                  onChange={handleEndYearChange}
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

      {
        isSubmitted &&
          educationList.map((education) => (
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
                  deleteEducatiionField(education, 0);
                }}
              >
                Delete
              </button>
            </div>
          ))

        // <div className="education" id={`education-${numberEducational}`}>
        //   <div className="information">
        //     <h2>School name</h2>
        //     <p>{displaySchool}</p>
        //     <h2>Location</h2>
        //     <p>{displayLocation}</p>
        //     <h2>Duration</h2>
        //     <p>
        //       From <span>{displayStartYear}</span> To{" "}
        //       <span>{displayEndYear}</span>
        //     </p>
        //   </div>
        //   <div className="display-buttons">
        //     <button>Edit</button>
        //     <button>Delete</button>
        //   </div>
        // </div>
      }
    </div>
  );
}

export default Educational;
