import React from 'react'
import PackagePlans from '../components/PackagePlans'
import SimpleAccordion from '../components/Devices'
//import Label from '../components/Label'
import './OrderPage.css'
import Addons from '../components/Addons'
import Label from '../components/Label'
import SwitchSelector from "react-switch-selector";
import Total from '../components/Total'
import TotalBill from '../components/TotalBill'

const OrderPage = () => {
  function calculateTotal() {
    const keyMap = Object.keys(TotalBill);
    let sum = 0.0;
    for (let index = 0; index < keyMap.length; index++) {
      const element = parseFloat(TotalBill[keyMap[index]]);
      sum = sum + element;
    }


    return sum;
  }
  const [total, setTotal] = React.useState(calculateTotal());


  const handleTotal = () => {
    setTotal(calculateTotal());
    console.log(total)
  }

  const [selection, setSelection] = React.useState(false);
  return (
    <>

      <div id='OrderSection'>
        <div onClick={handleTotal}><PackagePlans></PackagePlans></div>
        <div onClick={handleTotal}><SimpleAccordion></SimpleAccordion> </div>
        <div onClick={handleTotal}> <Addons></Addons> </div>
        <div onClick={handleTotal}> <Total></Total> </div>
      </div>
    </>
  )
}

export default OrderPage