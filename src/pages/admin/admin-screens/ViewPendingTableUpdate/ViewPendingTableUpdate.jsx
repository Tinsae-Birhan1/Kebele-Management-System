import React from 'react'
import PropTypes from 'prop-types'
import AnimatedPage from "../../../../components/AnimatedPage";
import PendingViewUp from "../../../../components/DataTable/viewpendingUpdates/viewpendingUpdates";

const ViewPendingTableUpdate = props => {
  return (
    <AnimatedPage>
    <div className="admin-screen">
    
      <PendingViewUp/>
    </div>
  </AnimatedPage>  
  )
}


export default ViewPendingTableUpdate