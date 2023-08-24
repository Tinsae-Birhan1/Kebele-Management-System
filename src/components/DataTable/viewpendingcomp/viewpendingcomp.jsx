import React from 'react';
import PropTypes from 'prop-types';
import "./viewpendingcomp.css";
import { useState } from "react";
import expire from "./reject.png";


const viewpendingcomp = props => {
  const [showNotexpier, setShowNotexpier] = useState(false);
  const openNotexpier = () => {
    setShowNotexpier(true);
  };

  const closeNotexpier = () => {
    setShowNotexpier(false);
    setSubmitted(false);
  };


  if (showNotexpier) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <fieldset
          style={{
            padding: 0,
            borderLeft: "7px solid #00a967",
            borderRight: "none",
          }}
        >
          <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Complaint</h2>
            <form action="#" style={{ marginLeft: "-150px", marginTop: "10px" }}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div>
                <div className="w-full">
                  <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Complaint Made by </label>
                  <div
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    Tinsae
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Complaint</label>
                  <div
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio possimus commodi accusantium quis rerum nihil at iure perferendis fugiat vitae, doloremque quam? Dolor et facere aut veritatis consequuntur a non?
                  </div>
                </div>
                </div>

                
              </div>
              <div className="flex items-center space-x-4">
              <div>
          <h4>Put your Reply bellow</h4>
          <div className="text-area">
            <textarea placeholder="Type your message here..."></textarea>
          </div>
          <button className="post-btn">Reply</button>
        </div>
                
              </div>
            </form>
          </div>
        </fieldset>
      </section>
    </div>
  );
};

viewpendingcomp.propTypes = {};

export default viewpendingcomp;
