import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DevicesCard from './DevicesCard'
import Grid from '@mui/material/Grid';
import Label from './Label';
import SwitchSelector from "react-switch-selector";

import TotalBill from './TotalBill';
import TotalURL from './TotalURL';
export default function SimpleAccordion(props) {

  const priceMap = {
    'dev1': 5,
    'dev2': 10,
    'dev3': 15,
  }

  const detailsMap = {
    'dev1': {
      'url': '1device',
      'details': '1 Device'
    },
    'dev2': {
      'url': '2device',
      'details': '2 Device'
    },
    'dev3': {
      'url': '3device',
      'details': '3 Device'
    },
  }
  
  const [selection, setSelection] = React.useState(false);
  const [activatedId, setactivatedId] = React.useState('dev1');
  TotalBill.devicePrice = priceMap[activatedId];
  TotalURL.deviceDetails = detailsMap[activatedId];

  if (selection == false){
    TotalURL.typeDetails.url='mag';
    TotalURL.typeDetails.value='Mag Type';
  }

  else{
    TotalURL.typeDetails.url='';
    TotalURL.typeDetails.value='';
  }
  // handling the selective package 
  const clickHandler = (id) => {
    const element_prev = document.getElementById(activatedId);
    const element = document.getElementById(id);


    if (element_prev === null) {
      setactivatedId(id);
      element.classList.add('selectedDiv')
    } else {
      element_prev.classList.remove('selectedDiv');
      setactivatedId(id);
      element.classList.add('selectedDiv')
    }

    TotalBill.devicePrice = priceMap[id];
    TotalURL.deviceDetails = detailsMap[id];
    if (selection == false){
      TotalURL.typeDetails.url='mag';
      TotalURL.typeDetails.value='Mag Type';
    }
    else{
      TotalURL.typeDetails.url='';
      TotalURL.typeDetails.value='';
    }

    console.log(TotalURL.typeDetails);
    console.log(TotalURL.deviceDetails);
  }

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
    if (selection == true){
      clickHandler('dev1');
      document.getElementById('deviceType').click();
      TotalURL.typeDetails.url='mag';
      TotalURL.typeDetails.value='Mag Type';
    }
  };


  return (
  <>
    <div id='deviceType' style={{ width: "100%", height: 50, justifySelf: 'center' }}>
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
    <div id='DeviceSection'>

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Select the Number of Devices</Typography>
        </AccordionSummary>
        <AccordionDetails> */}
      {/* <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="left" spacing={2}>
             
                  <Grid key={0} item>
                    <DevicesCard ></DevicesCard>
                  </Grid>
                  <Grid key={1} item>
                    <DevicesCard></DevicesCard>
                  </Grid>
                  <Grid key={2} item>
                    <DevicesCard ></DevicesCard>
                  </Grid>
          
              </Grid>
            </Grid>
          </Grid> */}

          
      <div className="Packages-Container-SmallMobile" style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: '40px 0px' }}>

      <DevicesCard divId='dev1' active={activatedId} handleChange={() => clickHandler('dev1')} devices={`1  Device`} description="Use your IPTV on Single Device at a time" price={priceMap.dev1} duration="month" ></DevicesCard>
        {selection ?
          <>
            <DevicesCard divId='dev2' active={activatedId} handleChange={() => clickHandler('dev2')} devices={`2   Devices`} description="Use your IPTV on Double Device at a time" price={priceMap.dev2} duration="month" ></DevicesCard>
            <DevicesCard divId='dev3' active={activatedId} handleChange={() => clickHandler('dev3')} devices={`3   Devices`} description="Use your IPTV on Tripple Device at a time" price={priceMap.dev3} duration="month" ></DevicesCard>
          </>
          : <></>}

      </div>
      {/* 
        </AccordionDetails>
      </Accordion> */}

    </div>
    </>
  );
}
