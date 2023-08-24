import React from 'react'
import PropTypes from 'prop-types'
import AnimatedPage from "../../../../components/AnimatedPage";
import PendingViewBC from "../../../../components/DataTable/viewBCpending/viewBCpending";

const ViewPendingTableBC = props => {
  return (
    <AnimatedPage>
    <div className="admin-screen">
    
      <PendingViewBC/>
    </div>
  </AnimatedPage>  
  )
}


export default ViewPendingTableBC