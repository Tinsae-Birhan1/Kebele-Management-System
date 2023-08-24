import React from 'react'
import PropTypes from 'prop-types'
import AnimatedPage from "../../../../components/AnimatedPage";
import PendingViewIDReno from "../../../../components/DataTable/viewIDRenopending/viewIDRenopending";

const ViewPendingTableIDReno = props => {
  return (
    <AnimatedPage>
    <div className="admin-screen">
    
      <PendingViewIDReno/>
    </div>
  </AnimatedPage>  
  )
}


export default ViewPendingTableIDReno