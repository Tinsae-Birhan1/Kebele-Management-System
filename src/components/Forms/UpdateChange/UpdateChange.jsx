import React, { useState } from "react";
import Select from "react-select";
import "../IdForm/IDForm.css";
import idimage from "./update.jpg";
import "../ResidentRegForm/RRForm.css";
import "./UpdateChange.css"


function UpdateChange() {
  const handleReset = (event) => {
    event.preventDefault();
    event.target.form.reset();
  };
  const [selection, setSelection] = useState(null);

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
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

  
  const [isIdSelected, setIsIdSelected] = useState(true);

  const handleToggle = () => {
    setIsIdSelected(!isIdSelected);
  };

  return (
    <div>
      <div className="all">
        <div className="image-container">
          <h2 style={{ marginTop: "40px" }}>
          Update and Change Request           </h2>
          <img src={idimage} alt="" />
        </div>
        <div className="form-container">
          <div id="msform">
          <h2 className="fs-title">Update and Change Request Form</h2>

            <p className="form-description">
              Fill out all the necessary information and <span>schedule</span>{" "}
              your date to collect!

            </p>
            {/* fieldsets */}
            <fieldset
              style={{
                padding: 0,
                borderLeft: "6px solid #00a967",
                borderRight: "none",
        
              }}
            >
              {/* <h3 className="fs-subtitle">Fill out your personal information</h3> */}
              <form className="form" autoComplete="off">

                
              <div>
                <div>
              <h2 className="fs-title">Request Type</h2>
              <div>
        <input
          type="radio"
          name="documentType"
         
        />
        <label >Change</label>
      </div>
      <div>
        <input
          type="radio"
          name="documentType"
         
        />
        <label >Updates</label>
      </div>
      </div>
      <div>
        <div>
      <h2 className="fs-title">Id or Certificate </h2>
              </div>
        <input
          type="radio"
          name="documentType"
          value="certificate"
          checked={selection === "certificate"}
          onChange={handleSelectionChange}
        />
        <label htmlFor="certificate">Certificate</label>
      </div>
      <div>
        <input
          type="radio"
          name="documentType"
          value="id"
          checked={selection === "id"}
          onChange={handleSelectionChange}
        />
        <label htmlFor="id">ID</label>
      </div>
      

      {selection === "certificate" && (
        <div>
          <h2 className="fs-title">Type of Certificate </h2>
          <input type="radio" name="certificateType" value="bc" checked={selection === "bc"}
          onChange={handleSelectionChange} />
          <label htmlFor="bc">Birth Certificate</label>
          <br />
          <input type="radio" name="certificateType" value="dc" />
          <label htmlFor="dc">Death Certificate</label>
          <br />
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="wc">Wedding Certificate</label>
        </div>
      )}

      {selection === "bc" && (
        <div>
          <h2 className="fs-title">Part of Birth Certificate </h2>
           <input type="radio" name="certificateType" value="PI" checked={selection === "PI"}
          onChange={handleSelectionChange} />
          <label htmlFor="PI">Personal Information</label>
          <br />
          <input type="radio" name="certificateType" value="PAI" checked={selection === "PAI"}
          onChange={handleSelectionChange} />
          <label htmlFor="PAI">Mother's Information</label>
          <br />
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="PAI">Father's Information</label>
          
        </div>
      )}
{selection === "PAI" && (
        <div>
           <input type="radio" name="certificateType" value="bc" checked={selection === "bc"}
          onChange={handleSelectionChange} />
          <label htmlFor="bc">First Name</label>
          <br />
          <input type="radio" name="certificateType" value="bc" checked={selection === "bc"}
          onChange={handleSelectionChange} />
          <label htmlFor="bc">Last Name</label>
          <br />
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="wc">Address</label>
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="wc">Phone Number</label>
         
        </div>
      )}
      {selection === "PI" && (
        <div>
           <input type="radio" name="certificateType" value="bc" checked={selection === "bc"}
          onChange={handleSelectionChange} />
          <label htmlFor="bc">First Name</label>
          <br />
          <input type="radio" name="certificateType" value="bc" checked={selection === "bc"}
          onChange={handleSelectionChange} />
          <label htmlFor="bc">Last Name</label>
          <br />
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="wc">Middle Name</label>
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="wc">Nationality</label>
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="wc">Place of Birth</label>
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="wc">Weight</label>
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="wc">Delivery Method</label>
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="wc">Attendant Profetional</label>
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="wc">Gender</label>
          <input type="radio" name="certificateType" value="wc" />
          <label htmlFor="wc">Birth Date</label>
         
        </div>
      )}
      
    </div>
              
                <div className="btn-sections" style={{ marginTop: "5px" }}>
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
export default UpdateChange;
