import "./header.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import dot from "./full-stop.png";
import accept from "./accept.jpg";


export default function Header() {

  const [showDialog, setShowDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setSubmitted(false);
  };

  const handleComplainSubmission = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (showDialog) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [showUpdate, setShowUpdate] = useState(false);
  const openUpdate = () => {
    setShowUpdate(true);
  };

  const closeUpdate = () => {
    setShowUpdate(false);
    setSubmitted(false);
  };


  if (showUpdate) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
    Navigate("/users/auth");
  };
  const [open, setOpen] = useState(false);

  let menuRef = useRef(null);
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

//////////////////////////////////////////////////////////////////////
  const [showAccept, setShowAccept] = useState(false);
  const openAccept = () => {
    setShowAccept(true);
  };

  const closeAccept = () => {
    setShowAccept(false);
    setSubmitted(false);
  };


  if (showAccept) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  //////////////////////////////////////////////////////
  const [showReject, setShowReject] = useState(false);
  const openReject = () => {
    setShowReject(true);
  };

  const closeReject = () => {
    setShowReject(false);
    setSubmitted(false);
  };


  if (showReject) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
 
  return (
    <div className="nav">
      <h3 className="logo">KKTasks</h3>

      <div className="menus" ref={menuRef}>
        <ul className="menu-lists">
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>

          <div className="dropdown">
            <div className="menu-trigger" onClick={toggleDropdown}>
              Notification
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu" >
                <a href="#">
                  
                 <div className="ml-3 text-sm font-normal">
  <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Witness Required</span>
  <p>
    <span className="font-bold">Sara Salah</span> wants you
    <span className="text-blue-500 hover:underline">to be her</span> Witness. 2m
  </p>
  <div className="button-group" style={{marginLeft:"50px"}}>
  <div onClick={openAccept}>
  <button type="submit" className="accept-btn" style={{ backgroundColor: '#00a967', color: 'white' }}  >
      Accept
    </button>
  {showAccept && (
            <div className="back">
            <div className="dialog" style={{
             width: "5000px",
            
            }}>
              
                  <h2 >Witness Form For  <span>Abdelselam</span> </h2> 
                 <div>
                  <input type="checkbox" id="accounted" name="response" value="accounted"/>
<label for="accounted">I will be accounted to be a witness <span>Abduselam Kemal </span> </label>

        </div>
                  <div className="btns-1">
                    <button onClick={closeAccept}>Submit</button>
                  </div>
            </div>
            </div>
          )}
  </div>


  <div onClick={openReject}>
  <button type="reject" className="reject-btn" style={{ backgroundColor:  '#FF9999', color: 'white' }}>
      Reject
    </button>
  {showReject && (
            <div className="back">
            <div className="dialog" style={{
             width: "5000px",
            
            }}>
              
                  <h2 >Reject Witness Form For  <span>Abdelselam</span> </h2> 
                 <div>
                  <input type="checkbox" id="accounted" name="response" value="accounted"/>
<label for="accounted">I am sure that i don't want to be a witness for <span>Abduselam Kemal </span> </label>

        </div>
                  <div className="btns-1">
                    <button onClick={closeReject}>Submit</button>
                  </div>
            </div>
            </div>
          )}
  </div>
    
    
   
  </div>
</div>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Sara Salah</span> replied on the{' '}
                    <span className="text-blue-500 hover:underline">Upload Image</span> article. 2m
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Slick Net</span> started following you. 45m
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Jane Doe</span> liked your reply on the{' '}
                    <span className="text-blue-500 hover:underline">Test with TDD</span> article. 1h
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Abigail Bennett</span> started following you. 3h
                  </p>
                </a>
                <div className="see-all-container" onClick={openUpdate}>
                  <a  className="see-all">
                    See all notifications
                  </a>
                  
                </div>              
              </div>
            )}

{showUpdate && (
            <div className="back">
            <div className="updateContainer">
           
                  <h2 className="successnot">Notification</h2>
                  <div className="updateBox" >
                  <a href="#">
                  <p>
                    <span className="font-bold">Sara Salah</span> replied on the{' '}
                    <span className="text-blue-500 hover:underline">Upload Image</span> article. 2m
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Slick Net</span> started following you. 45m
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Jane Doe</span> liked your reply on the{' '}
                    <span className="text-blue-500 hover:underline">Test with TDD</span> article. 1h
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Abigail Bennett</span> started following you. 3h
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Sara Salah</span> replied on the{' '}
                    <span className="text-blue-500 hover:underline">Upload Image</span> article. 2m
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Slick Net</span> started following you. 45m
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Jane Doe</span> liked your reply on the{' '}
                    <span className="text-blue-500 hover:underline">Test with TDD</span> article. 1h
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Abigail Bennett</span> started following you. 3h
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Sara Salah</span> replied on the{' '}
                    <span className="text-blue-500 hover:underline">Upload Image</span> article. 2m
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Slick Net</span> started following you. 45m
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Jane Doe</span> liked your reply on the{' '}
                    <span className="text-blue-500 hover:underline">Test with TDD</span> article. 1h
                  </p>
                </a>
                <a href="#">
                  <p>
                    <span className="font-bold">Abigail Bennett</span> started following you. 3h
                  </p>
                </a>
                  </div>
                  <div className="btns-1">
                    <button onClick={closeUpdate}>Close</button>
                  </div>

            </div>
            </div>
          )}
            
          </div>
          <li>
            {auth ? (
              <Link onClick={logout} className="links" to="/users/Auth">
                LogOut
              </Link>
            ) : (
              <Link className="links" to="/users/Auth">
                Sign Up
              </Link>
            )}
          </li>
          <li>
            <Link className="links" to="/alladmin">
              Account
            </Link>
          </li>
        </ul>
      </div>
      
    </div>
  );

  function DropDownItem(props) {
    return (
      <li className="dropdownItem">
        <div className="messages">
          <p>{props.message}</p>
          <img src={dot} alt="" />
        </div>
      </li>
    );
  }
}
