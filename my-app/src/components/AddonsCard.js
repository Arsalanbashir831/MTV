import React from 'react'
import addon1 from '../assets/addon1.svg'
import Switch from "react-switch";
import './Switch.css'

import TotalBill from './TotalBill';
const AddonsCard = (props) => {
  const priceMap = {
    'worldwide': 10,
    'adult': 20
  }
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
    if (props.type == 'worldwide' && !checked) {
      TotalBill.worldwidePrice = priceMap.worldwide;
    }
    else if (props.type == 'worldwide') {
      TotalBill.worldwidePrice = 0;
    }

    else if (props.type == 'adult' && !checked) {
      TotalBill.adultPrice = priceMap.adult;
    }
    else if (props.type == 'adult') {
      TotalBill.adultPrice = 0;
    }

    // console.log("----------------------------");
    // console.log(TotalBill.adultPrice);
    // console.log("----------------------------");
    // console.log("----------------------------");
    // console.log(TotalBill.worldwidePrice);
    // console.log("----------------------------");

  }
  return (
    <div id="extraConnect" class=""><div class="content"><img src={addon1} alt="extra connect" /> <div class="info"><p class="title">Extra Connection</p> <p class="description">
      Use your IPTV on multiple devices at the same time
    </p></div></div> <div class="pricing"><p class="price">
      1.67<span>€</span>/month
    </p> <label> <Switch height={25.6} onColor='#37d348' checkedIcon={false} uncheckedIcon={false} width={56} onChange={handleChange} checked={checked}></Switch> </label> </div></div>
  )
}

export default AddonsCard