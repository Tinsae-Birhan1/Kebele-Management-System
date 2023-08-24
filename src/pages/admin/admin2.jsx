import "./admin.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaHome, FaClock, FaCog } from "react-icons/fa";
import Dashboard from "./admin-screens/dashboard/admin_dashboard.jsx";
import Settings from "./admin-screens/settings/admin_settings.jsx";
import AnimatedPage from "../../components/AnimatedPage";
import Pending from "./admin-screens/pending/Pending";
import Staff from "./admin-screens/Staff/Staff";
import Update from "./admin-screens/update/update";
import Complaints from "./admin-screens/Complaint/Complaint";
import AddStaffs from "./admin-screens/AddStaff/AddStaff";
import ViewStaffs from "./admin-screens/ViewStaff/ViewStaff";

import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import admin from "./download.png";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <PulseLoader color={"#00a967"} loading={loading} size={20} />
        </div>
      ) : (
        <AnimatedPage>
          <div className="container">
            <div className="sidenav">
              <ul className="sidenav-menu">
                <h3 className="logo"></h3>
                <li>
                  <Link to="admin/dashboard">
                    <FaHome className="icon" />
                    Admin
                  </Link>
                </li>
                <li>
                  <Link to="admin/pending">
                    <FaClock className="icon" />
                    VEP
                  </Link>
                </li>
                <li>
                  <Link to="admin/staff">
                    <FaClock className="icon" />
                    REP
                  </Link>
                </li>
                <li>
                  <Link to="admin/updaterequest">
                    <FaClock className="icon" />
                   REP Group Leader
                  </Link>
                </li>
                
                <li>
                  <Link to="admin/complains">
                    <FaClock className="icon" />
                    vEP Group Leader
                  </Link>
                </li>
                
                <div className="profile">
                  <img src={admin} alt="" />
                  <p>Abdelselam</p>
                </div>
              </ul>
            </div>
            <Routes>
              <Route exact path="admin/dashboard" element={<Dashboard />} />
              <Route exact path="admin/settings" element={<Settings />} />
              <Route path="admin/pending" element={<Pending />} />
              <Route path="admin/staff" element={<Staff />} />
              <Route path="admin/updaterequest" element={<Update/>} />
              
              <Route path="admin/complains" element={<Complaints/>} />
              <Route path="admin/addstaffs" element={<AddStaffs/>} />
              
              <Route path="admin/viewstaffs" element={<ViewStaffs/>} />



            </Routes>
          </div>
        </AnimatedPage>
      )}
    </div>
  );
}
