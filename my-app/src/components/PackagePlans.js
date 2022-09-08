import React from 'react'
import Label from './Label'
import FullWidthTabs from './TabPanel'

const PackagePlans = () => {
    let bgColor=getComputedStyle(document.documentElement).getPropertyValue("--components-dark-theme");
    return (
        <div className='packagePlans'>
            {/* label or step number  */}
            {/* <Label no={1} text='Select the Plans ' ></Label> */}
            <FullWidthTabs  bgColor={"transparent"} barColor={bgColor}></FullWidthTabs>
        </div>
    )
}

export default PackagePlans