import React, { useState } from "react";
import Select from "react-select";
import "../IdForm/IDForm.css";
import idimage from "./IdLost.png";
import "../ResidentRegForm/RRForm.css";


function IDLost() {
  const handleReset = (event) => {
    event.preventDefault();
    event.target.form.reset();
  };

  const maritialStatusOptions = [
    { value: "married", label: "Married" },
    { value: "unmarried", label: "Unmarried" },
    { value: "divorce", label: "Divorce" },
  ];

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const religionOptions = [
    { value: "christian", label: "Christian" },
    { value: "muslim", label: "Muslim" },
    { value: "catholic", label: "Catholic" },
    { value: "manually", label: "Enter Manually" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [date, setDate] = useState();

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <div className="all">
        <div className="image-container">
          <h2 style={{ marginTop: "40px" }}>
            Lost ID Application Form
          </h2>
          <img src={idimage} alt="" />
        </div>
        <div className="form-container">
          <div id="msform">
            <ul
              id="progressbar"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <li
                className={step === 1 ? "active" : ""}
                style={{ color: step >= 1 ? "#00a967" : "#59616d" }}
              >
                ID Lost Information
              </li>
              <li
                className={step === 2 ? "active" : ""}
                style={{ color: step >= 2 ? "#00a967" : "#59616d" }}
              >
               Request for new Id
              </li>
              
            </ul>
            <p className="form-description">
              Fill out all the necessary information and <span>schedule</span>{" "}
              your date to collect!

            </p>
            {/* fieldsets */}
            <fieldset
              style={{
                display: step === 1 ? "block" : "none",
                padding: 0,
                borderLeft: "6px solid #00a967",
                borderRight: "none",
        
              }}
            >
              <h2 className="fs-title">Id Lost Information</h2>
              {/* <h3 className="fs-subtitle">Fill out your personal information</h3> */}
              <form className="form" autoComplete="off">
                <div className="form-sections">
                <div className="form-group-birth">
                    <p>Id Lost Date</p>
                    <input
                      type="date"
                      id="age"
                      className="bdate-input"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                 
                  
                </div>
                
                <div className="form-sections">
                  
                <div className="form-group">
                    <label htmlFor="mname">Location of Id Lost</label>
                    <input type="text" id="mname" />
                  </div>
                  
                </div>
                {/* <h2 className="fs-title">New Id Request</h2>
                <div className="form-sections">
                  
                <label>
          <input
            type="radio"
            value="unknown"
            
          />
          Keep My old Information
        </label>
                </div>
                 */}
                
                {/* <div className="form-sections">
                <label>
          <input
            type="radio"
            value="dontWantToWitness"
            
          />
          Change My old Information
        </label>
                </div> */}
                <div className="btn-sections" style={{ marginTop: "5px" }}>
                  <button
                    type="reset"
                    className="reset-btn"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    className="next action-button"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </form>
            </fieldset>
            
            <fieldset
              style={{
                display: step === 2 ? "block" : "none",
                padding: 0,
                borderLeft: "6px solid #00a967",
                borderRight: "none",
              }}
            >
              <h2 className="fs-title">Request for new Id</h2>
              {/* <h3 className="fs-subtitle">Fill out your personal information</h3> */}
              <form className="form" autoComplete="off">
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mname">Last Name</label>
                    <input type="text" id="mname" />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pnumber">Phone Number</label>
                    <input type="text" id="pnumber" />
                  </div>
                </div>
                <p className="section-label">Schedule Date</p>
                <div className="form-group-birth">
                  <input
                    type="date"
                    id="age"
                    className="bdate-input"
                    onChange={(e) => setDate(e.target.value)}
                    // now {date} will be the selected date value
                  />
                  {/* <p className="schedule-notifier">Your scheduled date is {date}</p> */}
                </div>
                <div className="btn-sections" style={{ marginTop: "5px" }}>
                  <button
                    type="button"
                    className="previous action-button"
                    onClick={previousStep}
                  >
                    Previous
                  </button>
                  <button
                    type="reset"
                    className="reset-btn"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IDLost;
