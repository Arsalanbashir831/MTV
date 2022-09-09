import React from 'react'
import PackagePlans from '../components/PackagePlans'
import SimpleAccordion from '../components/Devices'
//import Label from '../components/Label'
import './OrderPage.css'
import Addons from '../components/Addons'
const OrderPage = () => {
  return (
   <>
  
  <div id='OrderSection'>
 <PackagePlans></PackagePlans>
 <SimpleAccordion></SimpleAccordion>
 <Addons></Addons>
  </div>
   </>
  )
}

export default OrderPage