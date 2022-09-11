import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DevicesCard from './DevicesCard'
import Grid from '@mui/material/Grid';
import Label from './Label';

import TotalBill from './TotalBill';
import TotalURL from './TotalURL';
export default function SimpleAccordion(props) {

  const priceMap= {
    'dev1' : 5,
    'dev2' : 10,
    'dev3' : 15,
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
  const [activatedId, setactivatedId] = React.useState('dev1');
  TotalBill.devicePrice = priceMap[activatedId];
  TotalURL.deviceDetails = detailsMap[activatedId];
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

  }


  return (
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
        {props.type ?
          <>
            <DevicesCard divId='dev2' active={activatedId} handleChange={() => clickHandler('dev2')} devices={`2   Devices`} description="Use your IPTV on Double Device at a time" price={priceMap.dev2} duration="month" ></DevicesCard>
              <DevicesCard divId='dev3' active={activatedId} handleChange={() => clickHandler('dev3')} devices={`3   Devices`} description="Use your IPTV on Tripple Device at a time" price={priceMap.dev3} duration="month" ></DevicesCard>
          </>
          : ''}

      </div>
      {/* 
        </AccordionDetails>
      </Accordion> */}

    </div>
  );
}
