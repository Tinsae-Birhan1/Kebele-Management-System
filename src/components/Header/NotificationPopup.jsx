import React from "react";
import "./NotificationPopup.css";

const NotificationPopup = () => {
  return (
    <div className="notification-popup">
      <a href="#">
        <div className="ml-3 text-sm font-normal">
          <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Witness Required</span>
          <p>
            <span className="font-bold">Sara Salah</span> wants you
            <span className="text-blue-500 hover:underline">to be her</span> Witness. 2m
          </p>
          <div className="button-group" style={{ marginLeft: "50px" }}>
            <button type="submit" className="accept-btn" style={{ backgroundColor: '#00a967', color: 'white' }}>
              Accept
            </button>
            <button type="reject" className="reject-btn" style={{ backgroundColor: '#FF9999', color: 'white' }}>
              Reject
            </button>
          </div>
        </div>
      </a>
      {/* Additional notification items */}
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
      <div className="see-all-container">
        <a href="#" className="see-all">
          See all notifications
        </a>
      </div>
    </div>
  );
};

export default NotificationPopup;
