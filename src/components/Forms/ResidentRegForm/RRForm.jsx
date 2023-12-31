// import React, { useState } from "react";
import React, { useState, useEffect, useRef } from 'react';
// import Select from "react-select";
import Select from "react-select";

import register from "./register2.png";
import "./RRForm.css";
// 'Tinsae',
//     'Bereket',
//     'Abdu',
//     'Gedihon',
//     'Item 5',
//     'Item 6',
//     'Witness 1',
//     'Witness 2',
//     'Witness 3',
//     'Witness 4',
//     'Witness 5',

export default function RRForm() {
  
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([
    'Witness 1',
    'Witness 2',
    'Witness 3',
    'Witness 4',
    'Witness 5',
  ]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      if (selectedItems.length < 3) {
        setSelectedItems([...selectedItems, item]);
      }
    }
    setSearchTerm('');
    setDropdownVisible(false);
  };

  const handleRemoveWitness = (item) => {
    setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
  };

  const handleAddWitness = () => {
    // Perform the necessary logic for adding the witness
    console.log('Witness Added');
    console.log('Name:', name);
    console.log('ID:', id);
    console.log('Phone:', phone);
    console.log('Selected Witnesses:', selectedItems);

    // Reset the form fields
    setName('');
    setId('');
    setPhone('');
    setSelectedItems([]);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
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
      <h2 style={{ marginTop: "40px" }}>Residential Registration Application Form</h2>
        <img src={register} alt="" />
      </div>
      <div className="form-container">
        <div id="msform">
          
        <ul id="progressbar" style={{ display: "flex", justifyContent: "space-between" }}>
  <li className={step === 1 ? "active" : ""} style={{ color: step >= 1 ? "#00a967" : "#59616d" }}>
    Account Setup
  </li>
  <li className={step === 2 ? "active" : ""} style={{ color: step >= 2 ? "#00a967" : "#59616d" }}>
    Personal Information
  </li>
  <li className={step === 3 ? "active" : ""} style={{ color: step >= 3 ? "#00a967" : "#59616d" }}>
  Choose Witness
  </li>
</ul>

          {/* fieldsets */}
          <fieldset style={{ display: step === 1 ? "block" : "none" , padding: 0, borderLeft: "6px solid #00a967" , borderRight: "none" }}>
            <div className="auth-body">
        <form className="auth-form-validation">
          <div className="input-field">
          <input type="email" name="txt" placeholder="User name" required="" class="password-input"/>

          </div>
          <div className="input-field">
            {/* <label htmlFor="email" className="input-label">
              Email address
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="example@gmail.com"
              autoComplete="off"
              required
            /> */}
            <input type="email" name="email" placeholder="Email" required="" class="password-input"/>
          </div>
          <div className="input-field">
            {/* <label htmlFor="password" className="input-label">
              Password
            </label> */}
            {/* <input
              type="password"
              name="password"
              id="password"
              className="input-control"
              placeholder="Password"
              autoComplete="off"
              required
            /> */}
            <input type="password" name="pswd" placeholder="Password" required=""  class="password-input"/>


          </div>
         
        </form>
        
      </div>
            <button type="button" className="next action-button" onClick={nextStep}>
              Next
            </button>
          </fieldset>
          <fieldset style={{ display: step === 2 ? "block" : "none", padding: 0, borderLeft: "6px solid #00a967" , borderRight: "none" }}>
            <h2 className="fs-title">Personal Information</h2>
            {/* <h3 className="fs-subtitle">Fill out your personal information</h3> */}
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
                
                <div className="form-group-birth">
                  <p>Since when did you start living in the woreda?</p>
                  <input
                    type="date"
                    id="age"
                    className="bdate-input"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="btn-sections" style={{ marginTop: "5px" }}>
                <button type="button" className="previous action-button" onClick={previousStep}>
                  Previous
                </button>
                <button type="reset" className="reset-btn" onClick={handleReset}>
                  Reset
                </button>
                <button type="button" className="next action-button" onClick={nextStep}>
                  Next
                </button>
              </div>
            </form>
          </fieldset>
          <fieldset style={{ display: step === 3 ? "block" : "none" , padding: 0, borderLeft: "6px solid #00a967" , borderRight: "none" }}>
          <div className="witness-form">
      <h2 className="fs-title">Witness</h2>
      <p>Choose three witnesses who are registered residents</p>
      <h6>Witness Number 1</h6>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required=""
        className="password-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="id"
        placeholder="ID Number"
        required=""
        className="password-input"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div className="dropdown" ref={dropdownRef}>
      {selectedItems.length > 0 && (
          <div className="selected-items">
            <h4>Selected Witness Number 1:</h4>
            <ul>
              {selectedItems.map((item) => (
                <li key={item}>
                  {item}
                  <button className="remove-witness" onClick={() => handleRemoveWitness(item)}>
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setDropdownVisible(true)}
        />
        {isDropdownVisible && searchTerm && filteredItems.length > 0 && (
          <div className="dropdown-menu">
            {filteredItems.map((item) => (
              <div
                key={item}
                className={`menu-item ${selectedItems.includes(item) ? 'selected' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
        
      </div>
      <button
        type="button"
        className="submit-btn"
        onClick={handleAddWitness}
        disabled={selectedItems.length !== 3}
      >
        Add Witness
      </button>
    </div>

            <button type="button" className="previous action-button" onClick={previousStep}>
              Previous
            </button>
            <button type="submit" className="submit-btn">
            Submit
          </button>
          </fieldset>
        </div>
      </div>
    </div>
    </div>
  );
}
