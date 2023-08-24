import React from 'react'
import PropTypes from 'prop-types'
import AnimatedPage from "../../../../components/AnimatedPage";
import PendingViewcomp from "../../../../components/DataTable/viewpendingcomp/viewpendingcomp";

const ViewPendingTableComp = props => {
  return (
    <AnimatedPage>
    <div className="admin-screen">
    
      <PendingViewcomp/>
    </div>
  </AnimatedPage>  
  )
}


export default ViewPendingTableComp