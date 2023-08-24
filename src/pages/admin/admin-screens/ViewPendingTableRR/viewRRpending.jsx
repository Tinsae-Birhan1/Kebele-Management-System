import React from 'react'
import PropTypes from 'prop-types'
import AnimatedPage from "../../../../components/AnimatedPage";
import PendingViewrr from "../../../../components/DataTable/viewRRpending/viewRRpending";

const viewRRpending = props => {
  return (
    <AnimatedPage>
    <div className="admin-screen">
    
      <PendingViewrr/>
    </div>
  </AnimatedPage>  
  )
}


export default viewRRpending