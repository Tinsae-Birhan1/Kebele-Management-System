import React from 'react'
import PropTypes from 'prop-types'
import AnimatedPage from "../../../../components/AnimatedPage";
import PendingViewDC from "../../../../components/DataTable/viewDCpending/viewDCpending";

const ViewPendingTableDC = props => {
  return (
    <AnimatedPage>
    <div className="admin-screen">
    
      <PendingViewDC/>
    </div>
  </AnimatedPage>  
  )
}


export default ViewPendingTableDC