import React from 'react'
import PropTypes from 'prop-types'
import AnimatedPage from "../../../../components/AnimatedPage";
import PendingView from "../../../../components/DataTable/viewpending/viewpending";

const ViewPendingTable = props => {
  return (
    <AnimatedPage>
    <div className="admin-screen">
    
      <PendingView/>
    </div>
  </AnimatedPage>  
  )
}


export default ViewPendingTable