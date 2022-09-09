import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import PriceCard from './PriceCard';
import MobileCategories from './MobileCategories';
import Label from './Label';
import SmallMobile from './SmallMobile';
import { IoPricetagSharp } from 'react-icons/io5';

import TotalBill from './TotalBill';


// helping functions 

// functions of bottom panels 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
      <div style={{ marginTop: "10px" }}
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}

      </div>

    </>

  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
// exportable functions 
export default function FullWidthTabs(props) {

  const priceMap = {
    'pid1': 10,
    'pid2': 20,
    'pid3': 30,
    'pid4': 40,
    'pid5': 50,
    'pid6': 60,
    'pid7': 70,
    'pid8': 50,
    'pid9': 50,
  }

  const [activatedId, setactivatedId] = React.useState('pid1');
  TotalBill.planPrice = priceMap[activatedId];
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
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

    TotalBill.planPrice =  priceMap[id];

  }



  return (
    <Box sx={{ bgcolor: `${props.bgColor}`, width: "100%" }}>
      <AppBar style={{ background: `${props.barColor}`, width: "99%" }} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Trial" {...a11yProps(0)} />
          <Tab label="Subscription" {...a11yProps(1)} />
          <Tab label="Resellers" {...a11yProps(2)} />
          {/* {/* you can add more tabs  */}
        </Tabs>

      </AppBar>
      <br></br>
      <br></br>
      <Label no='1' text='Choose A Plan'></Label>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* pannel 1 or Trial Packages Panel */}
        <TabPanel className="tabPanel" value={value} index={0} dir={theme.direction} >
          <Box className='Packages-Container '>
            <PriceCard handleChange={() => clickHandler('pid1')} active={activatedId} divId="pid1" lastSold="84" days="1" type="Month" price= {priceMap.pid1} currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid2')} active={activatedId} divId="pid2" lastSold="84" days="1" type="Month" price={priceMap.pid2} currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid3')} active={activatedId} divId="pid3" lastSold="84" days="1" type="Month" price={priceMap.pid3} currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid4')} active={activatedId} divId="pid4" lastSold="84" days="1" type="Month" price={priceMap.pid4} currency='£' billingCycle="Month" saving="20" ></PriceCard>
          </Box>
          <Box className='Packages-Container-Mobile '>
            <MobileCategories handleChange={() => clickHandler('pid1')} active={activatedId} divId="pid1" lastSold="84" days="1" type="Month" price={priceMap.pid1} currency='£' billingCycle="Month" saving="20"></MobileCategories>
            <MobileCategories handleChange={() => clickHandler('pid2')} active={activatedId} divId="pid2" lastSold="84" days="1" type="Month" price={priceMap.pid2} currency='£' billingCycle="Month" saving="20"></MobileCategories>
            <MobileCategories handleChange={() => clickHandler('pid3')} active={activatedId} divId="pid3" lastSold="84" days="1" type="Month" price={priceMap.pid3} currency='£' billingCycle="Month" saving="20"></MobileCategories>
            <MobileCategories handleChange={() => clickHandler('pid4')} active={activatedId} divId="pid4" lastSold="84" days="1" type="Month" price={priceMap.pid4} currency='£' billingCycle="Month" saving="20"></MobileCategories>
          </Box>
          <Box className='Packages-Container-SmallMobile '>
            <SmallMobile handleChange={() => clickHandler('pid1')} active={activatedId} divId="pid1" days="1" type="Month" price={priceMap.pid1} currency='£' saving="20"></SmallMobile>
            <SmallMobile handleChange={() => clickHandler('pid2')} active={activatedId} divId="pid2" days="1" type="Month" price={priceMap.pid2} currency='£' saving="20"></SmallMobile>
            <SmallMobile handleChange={() => clickHandler('pid3')} active={activatedId} divId="pid3" days="1" type="Month" price={priceMap.pid3} currency='£' saving="20"></SmallMobile>
            <SmallMobile handleChange={() => clickHandler('pid4')} active={activatedId} divId="pid4" days="1" type="Month" price={priceMap.pid4} currency='£' saving="20"></SmallMobile>
          </Box>
          {/* pannel 2 or Subscription Packages Panel */}
        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={1} dir={theme.direction}>
          <Box className='Packages-Container '>
            <PriceCard handleChange={() => clickHandler('pid5')} active={activatedId} divId="pid5" lastSold="84" days="1" type="Month" price={priceMap.pid5} currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid6')} active={activatedId} divId="pid6" lastSold="84" days="1" type="Month" price={priceMap.pid6} currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid7')} active={activatedId} divId="pid7" lastSold="84" days="1" type="Month" price={priceMap.pid7} currency='£' billingCycle="Month" saving="20" ></PriceCard>
          </Box>
          <Box className='Packages-Container-Mobile '>
            <MobileCategories handleChange={() => clickHandler('pid5')} active={activatedId} divId="pid5" lastSold="84" days="1" type="Month" price={priceMap.pid5} currency='£' billingCycle="Month" saving="20"></MobileCategories>
            <MobileCategories handleChange={() => clickHandler('pid6')} active={activatedId} divId="pid6" lastSold="84" days="1" type="Month" price={priceMap.pid6} currency='£' billingCycle="Month" saving="20"></MobileCategories>
            <MobileCategories handleChange={() => clickHandler('pid7')} active={activatedId} divId="pid7" lastSold="84" days="1" type="Month" price={priceMap.pid7} currency='£' billingCycle="Month" saving="20"></MobileCategories>

          </Box>
          <Box className='Packages-Container-SmallMobile '>
            <SmallMobile handleChange={() => clickHandler('pid5')} active={activatedId} divId="pid5" days="1" type="Month" price={priceMap.pid5} currency='£' saving="20"></SmallMobile>
            <SmallMobile handleChange={() => clickHandler('pid6')} active={activatedId} divId="pid6" days="1" type="Month" price={priceMap.pid6} currency='£' saving="20"></SmallMobile>
            <SmallMobile handleChange={() => clickHandler('pid7')} active={activatedId} divId="pid7" days="1" type="Month" price={priceMap.pid7} currency='£' saving="20"></SmallMobile>

          </Box>

          {/* pannel 3 or Resellers Package Panel */}
        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={2} dir={theme.direction}>
          <Box className='Packages-Container '>
            <PriceCard handleChange={() => clickHandler('pid8')} active={activatedId} divId="pid8" lastSold="84" days="1" type="Month" price={priceMap.pid8} currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid9')} active={activatedId} divId="pid9" lastSold="84" days="1" type="Month" price={priceMap.pid9} currency='£' billingCycle="Month" saving="20" ></PriceCard>
          </Box>
          <Box className='Packages-Container-Mobile '>
            <MobileCategories handleChange={() => clickHandler('pid8')} active={activatedId} divId="pid8" lastSold="84" days="1" type="Month" price={priceMap.pid8} currency='£' billingCycle="Month" saving="20"></MobileCategories>
            <MobileCategories handleChange={() => clickHandler('pid9')} active={activatedId} divId="pid9" lastSold="84" days="1" type="Month" price={priceMap.pid9} currency='£' billingCycle="Month" saving="20"></MobileCategories>

          </Box>
          <Box className='Packages-Container-SmallMobile '>

            <SmallMobile handleChange={() => clickHandler('pid8')} active={activatedId} divId="pid8" days="1" type="Month" price={priceMap.pid8} currency='£' saving="20"></SmallMobile>
            <SmallMobile handleChange={() => clickHandler('pid9')} active={activatedId} divId="pid9" days="1" type="Month" price={priceMap.pid9} currency='£' saving="20"></SmallMobile>

          </Box>
        </TabPanel>
        {/* you can add more panels */}
      </SwipeableViews>

    </Box>
  );
}