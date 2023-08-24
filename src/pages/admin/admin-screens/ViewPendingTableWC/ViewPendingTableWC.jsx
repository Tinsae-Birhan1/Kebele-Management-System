import React from 'react'
import PropTypes from 'prop-types'
import AnimatedPage from "../../../../components/AnimatedPage";
import PendingView from "../../../../components/DataTable/viewWCpending/viewWCpending";

const ViewPendingTableWC = props => {
  return (
    <AnimatedPage>
    <div className="admin-screen">
    
      <PendingView/>
    </div>
  </AnimatedPage>  
  )
}


export default ViewPendingTableWC