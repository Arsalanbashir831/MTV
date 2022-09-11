import React from 'react'
import addon1 from '../assets/addon1.svg'
import Switch from "react-switch";
import './Switch.css'

import TotalBill from './TotalBill';
import TotalURL from './TotalURL';
const AddonsCard = (props) => {
  const priceMap = {
    'worldwide': 10,
    'adult': 20
  }

  const detailsMap = {
    'worldwide': {
      'url': 'worldwide',
      'details': 'Worldwide'
    },
    'adult': {
      'url': 'adult',
      'details': 'Adult'
    },
    'empty': {
      'url': '',
      'details': ''
    }
  }
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
    if (props.type == 'worldwide' && !checked) {
      TotalBill.worldwidePrice = priceMap.worldwide;
      TotalURL.worldwideDetails = detailsMap.worldwide
    }
    else if (props.type == 'worldwide') {
      TotalBill.worldwidePrice = 0;
      TotalURL.worldwideDetails = detailsMap.empty;
    }

    else if (props.type == 'adult' && !checked) {
      TotalBill.adultPrice = priceMap.adult;
      TotalURL.adultDetails = detailsMap.adult;
    }
    else if (props.type == 'adult') {
      TotalBill.adultPrice = 0;
      TotalURL.adultDetails = detailsMap.empty;
    }

    // console.log("----------------------------");
    // console.log(TotalURL.adultDetails);
    // console.log("----------------------------");
    // console.log("----------------------------");
    // console.log(TotalURL.worldwideDetails);
    // console.log("----------------------------");

  }
  return (
    <div id="extraConnect" class=""><div class="content"><img src={addon1} alt="extra connect" /> <div class="info"><p class="title">{props.type}</p> <p class="description">
      Use your IPTV on multiple devices at the same time
    </p></div></div> <div class="pricing"><p class="price">
      <span> {props.price} £ /month</span>
    </p> <label> <Switch height={25.6} onColor='#37d348' checkedIcon={false} uncheckedIcon={false} width={56} onChange={handleChange} checked={checked}></Switch> </label> </div></div>
  )
}

export default AddonsCard