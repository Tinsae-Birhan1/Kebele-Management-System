import React from 'react'
import PropTypes from 'prop-types'
import AnimatedPage from "../../../../components/AnimatedPage";
import PendingViewLo from "../../../../components/DataTable/viewIDLostpending/viewIDLostpending";

const ViewPendingTableIDLo = props => {
  return (
    <AnimatedPage>
    <div className="admin-screen">
    
      <PendingViewLo/>
    </div>
  </AnimatedPage>  
  )
}


export default ViewPendingTableIDLo