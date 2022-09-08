import React from 'react'
import PackagePlans from '../components/PackagePlans'
import SimpleAccordion from '../components/Devices'
//import Label from '../components/Label'
import './OrderPage.css'
const OrderPage = () => {
  return (
   <>
  
  <div id='OrderSection'>
 <PackagePlans></PackagePlans>
 <SimpleAccordion></SimpleAccordion>
  </div>
   </>
  )
}

export default OrderPage