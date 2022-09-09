import React from 'react'
import PackagePlans from '../components/PackagePlans'
import SimpleAccordion from '../components/Devices'
//import Label from '../components/Label'
import './OrderPage.css'
import Addons from '../components/Addons'

import SwitchSelector from "react-switch-selector";


const OrderPage = () => {
  const options = [
    {
      label: 'Option 1',
      value: false,
      selectedBackgroundColor: "#0097e6",
    },
    {
      label: "Option 2",
      value: true,
      selectedBackgroundColor: "#fbc531"
    }
  ];

  const onChange = (newValue) => {
    console.log(newValue);
    setSelection(!selection);
  };

  const [selection, setSelection] = React.useState(false);
  return (
    <>

      <div id='OrderSection'>
        <PackagePlans></PackagePlans>

        <div style={{ width: "100%", height: 30, justifySelf: 'center' }}>
          <SwitchSelector
            onChange={onChange}
            options={options}
            initialSelectedIndex={0}
            backgroundColor={"#353b48"}
            fontColor={"#f5f6fa"}
          />
        </div>

        <SimpleAccordion type={selection}></SimpleAccordion>
        <Addons></Addons>
      </div>
    </>
  )
}

export default OrderPage