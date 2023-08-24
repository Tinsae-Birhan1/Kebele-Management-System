import DataTable from "react-data-table-component";
import './PendingTable.css';;
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function PendingTable() {
  const [showMiddleName, setShowMiddleName] = useState(false);
  const [showNationality, setShowNationality] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showMaritalStatus, setShowMaritalStatus] = useState(false);
  const [showReligion, setShowReligion] = useState(false);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.fname,
      sortable: true,
    },
    {
      name: "Middle Name",
      selector: (row) => row.mname,
      omit: !showMiddleName,
    },
    {
      name: "Last Name",
      selector: (row) => row.lname,
    },
    {
      name: "Sex",
      selector: (row) => row.sex,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "Nationality",
      selector: (row) => row.nationality,
      omit: !showNationality,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      omit: !showAddress,
    },
    {
      name: "Marital Status",
      selector: (row) => row.marital,
      omit: !showMaritalStatus,
    },
    {
      name: "Religion",
      selector: (row) => row.religion,
      omit: !showReligion,
    },
  ];

  const handleConfirm = (row) => {
    // Handle confirm button click
    console.log("confirmed");
  };

  const handleDeny = (row) => {
    // Handle deny button click
  };

  const data = [
    {
      id: 1,
      fname: "Abdelselam",
      mname: "selam",
      lname: "Kemal",
      age: 22,
      sex: "M",
      nationality: "E",
      address: "AA",
      marital: "haha",
      religion: "haha",
    },
  ];

  const [records, setRecords] = useState(data);
  const navigate = useNavigate();

  const handleRowClick = (row) => {
    navigate('/admin/admin/viewpendingtables');
  };

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.type.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setRecords(newData);
  }

  return (
    <div className="app-container">
      <div className="app-content">
        <div className="app-content-header">
          <div className="header-left">
            <h1 className="app-content-headerText">Pending Requests</h1>
          </div>
        </div>
        <div className="text-end">
          <input
            type="text"
            onChange={handleFilter}
            placeholder="Filter application type"
          />
        </div>
        <fieldset
          style={{
            padding: 0,
            borderLeft: '6px solid #00a967',
            borderRight: 'none',
          }}
        >
          <div className="toggle-columns">
            <label>
              <input
                type="checkbox"
                checked={showMiddleName}
                onChange={() => setShowMiddleName(!showMiddleName)}
              />
              Middle Name
            </label>
            <label>
              <input
                type="checkbox"
                checked={showNationality}
                onChange={() => setShowNationality(!showNationality)}
              />
              Nationality
            </label>
            <label>
              <input
                type="checkbox"
                checked={showAddress}
                onChange={() => setShowAddress(!showAddress)}
              />
              Address
            </label>
            <label>
              <input
                type="checkbox"
                checked={showMaritalStatus}
                onChange={() => setShowMaritalStatus(!showMaritalStatus)}
              />
              Marital Status
            </label>
            <label>
              <input
                type="checkbox"
                checked={showReligion}
                onChange={() => setShowReligion(!showReligion)}
              />
              Religion
            </label>
          </div>
          <DataTable
            columns={columns.filter((column) => !column.omit)}
            data={records}
            selectableRows
            fixedHeader
            pagination
            onRowClicked={handleRowClick}
          />
        </fieldset>
      </div>
    </div>
  );
}
