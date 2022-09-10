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
  const options = [
    {
      label: 'Option 1',
      value: false,
      selectedBackgroundColor: "linear-gradient(180deg,#37d348,#13cd7d)",
    },
    {
      label: "Option 2",
      value: true,
      selectedBackgroundColor: "linear-gradient(180deg,#37d348,#13cd7d)"
    }
  ];

  const onChange = (newValue) => {
    console.log(newValue);
    setSelection(!selection);
  };

  const handleTotal = () => {
    setTotal(calculateTotal());
    console.log(total)
  }

  const [selection, setSelection] = React.useState(false);
  return (
    <>

      <div id='OrderSection'>
        <div onClick={handleTotal}><PackagePlans></PackagePlans></div>
        <div style={{ marginBottom: '5%', marginTop: '5%' }} s><Label no={2} text={'Select the Number of Devices'} ></Label> </div>
        <div style={{ width: "100%", height: 50, justifySelf: 'center' }}>
          <SwitchSelector
            onChange={onChange}
            options={options}
            initialSelectedIndex={0}
            // backgroundColor={"#353b48"}
            backgroundColor={"#030e2e"}
            fontColor={"#f5f6fa"}
            wrapperBorderRadius={10}
            optionBorderRadius={10}
            fontSize={20}
          />
        </div>

        <div onClick={handleTotal}><SimpleAccordion type={selection}></SimpleAccordion> </div>
        <div onClick={handleTotal}> <Addons></Addons> </div>
        <div onClick={handleTotal}> <Total></Total> </div>
      </div>
    </>
  )
}

export default OrderPage