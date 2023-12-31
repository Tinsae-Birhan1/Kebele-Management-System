import React from 'react'
import Select from "react-select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import idimage from "./IDRenovation.jpg";
const IDRenovation = () => {
    const handleReset = (event) => {
        event.preventDefault();
        event.target.form.reset();
      };
    
      const genderOptions = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ];
    
      const [selectedOption, setSelectedOption] = useState(null);
      const [selectedDate, setSelectedDate] = useState("");
      const [showTimeGap, setShowTimeGap] = useState(false);
      const [selectedTimeGap, setSelectedTimeGap] = useState(null);
    
      const calculateStartingDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 10);
        return currentDate;
      };
    
      const timeGapOptions = [
        { value: "morning", label: "Morning" },
        { value: "afternoon", label: "Afternoon" },
      ];
      const maritialStatusOptions = [
        { value: "married", label: "Married" },
        { value: "unmarried", label: "Unmarried" },
        { value: "divorce", label: "Divorce" },
      ];
    
      const handleTimeGapChange = (selectedOption) => {
        setSelectedTimeGap(selectedOption);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
      };
  return (
    <div className="all">
      <div className="image-container">
        <h2 style={{ marginTop: "40px" }}>ID Renovation Application</h2>
        <img src={idimage} alt="" />
      </div>
      <div className="form-container">
        <h2>ID Renovation Application Form</h2>
        {/* <p className="form-description">
              Fill out all the necessary information and <span>schedule</span>{" "}
              your date to collect!
            </p> */}
            {/* fieldsets */}
            <fieldset
              style={{
                padding: 0,
                borderLeft: "6px solid #00a967",
                borderRight: "none",
                marginLeft: "-1px", 
                marginTop:"-10px",
                paddingBottom: "9px" 
              }}
              
            >
              <h2 className="fs-title">Personal Information</h2>
        <form className="form" autoComplete="off">

          <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mname">Middle Name</label>
                    <input type="text" id="mname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="nationality">Nationality</label>
                    <input type="text" id="nationality" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="religion">Religion</label>
                    {/* <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    className="type-text"
                    options={religionOptions}
                  /> */}
                    <input type="text" id="religion" />
                  </div>
                </div>
                <div className="form-sections">
                  <div className="form-group">
                    <label htmlFor="Mstatus">Marital Status</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      className="type-text"
                      options={maritialStatusOptions}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Mstatus">Gender</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      className="type-text"
                      options={genderOptions}
                    />
                  </div>
                  <div className="form-group-birth">
                    <p>Birth Date</p>
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
                    <label htmlFor="fname">Mother's Name</label>
                    <input type="text" id="fname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mname">Occupation</label>
                    <input type="text" id="mname" />
                  </div>
                  
                </div>
          {/* <p className="section-label">Mother's Information</p>
        <p className="section-label">Father's Information</p> */}
          <p className="section-label">Schedule Date</p>
          <div className="form-group-birth">
            <label htmlFor="scheduleDate">Date</label>
            <DatePicker
              id="scheduleDate"
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setShowTimeGap(true);
              }}
              minDate={calculateStartingDate()} // Set the minimum selectable date to today
              className="bdate-input"
              dateFormat="yyyy-MM-dd"
            />
          </div>
          {showTimeGap && (
            <div className="form-group-birth">
              <label htmlFor="timeGap">Time</label>
              <Select
                defaultValue={selectedTimeGap}
                onChange={handleTimeGapChange}
                className="type-text"
                options={timeGapOptions}
              />
            </div>
          )}
          <div className="btn-sections">
            <button type="reset" className="reset-btn" onClick={handleReset}>
              Reset
            </button>
            <button onClick={handleSubmit} type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
        </fieldset>
      </div>
    </div>
  )
}

export default IDRenovation