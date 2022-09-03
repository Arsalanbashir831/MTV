import React from 'react'
import './SetupPlatform.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { MdAccessibilityNew,MdCast } from "react-icons/md";
import { TbWorld } from 'react-icons/tb'
import { FaMobile } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { TbDevices } from 'react-icons/tb'
import { IoTvSharp } from 'react-icons/io5'
import {BsWindow,BsInboxesFill} from 'react-icons/bs';
import {BiDevices } from 'react-icons/bi'
import {DiHtml5DeviceAccess} from 'react-icons/di';
import SwipeableViews from 'react-swipeable-views';
import WebSetup from './WebSetup';
import Casting from './Casting';
// import MobSetup from './MobSetup';
// import Tv from './Tv';
import BoxStick from './BoxStick';
import MobSetup from './MobSetup';
import Tv from './Tv';
import { padding } from '@mui/system';
// import BoxStick from './BoxStick';

// import Casting from './Casting';


const SetupPlateform = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const iconSize = 105;

  const handleChangeIndex = (index) => {
    console.log(document.getElementsByClassName('bottomContainer'))
    setSelectedIndex(index);
    document.getElementsByClassName('mainContainerDesktop')[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    
  }
  return (


    <>
      <div className='mainContainerDesktop'>
        <Box
          sx={{
            display: 'grid',
            gridAutoColumns: '1fr',
            gridAutoFlow: 'column',
            gap: '30px',
            justifyContent: 'center',
          }}

        >
          <Card id={0} className={0 == selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(0) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
            <CardActionArea style={{height:'100%',padding: '7px'}}>
              <div style={{ padding: 4 }}>
                <div className='centerContent'>
                  <BsWindow style={{padding:'10px'}} className={0 === selectedIndex ? '' : 'selectedWhite'} size={iconSize}  />
                  <div >
                  <CardContent sx={{ padding: 0 }}>
                    <Typography sx={{ padding: 0,marginBottom:0,fontSize:'17px' }} gutterBottom variant="h6" component="div" className={0 === selectedIndex ? '' : 'selectedWhite'}>
                      Website
                    </Typography>
                  </CardContent>
                </div>
                </div>
              
              </div>
            </CardActionArea>
          </Card>

          <Card id={1} className={1 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(1) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
          <CardActionArea style={{height:'100%',padding: '7px'}}>
              <div style={{ padding: 4 }}>
                <div className='centerContent'>
                  <BiDevices style={{padding:'10px'}} size={iconSize} className={1 === selectedIndex ? '' : 'selectedWhite'} />
                  <div >
                  <CardContent sx={{ padding: 0  }}>
                    <Typography className={1 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0,fontSize:'17px',marginBottom:0 }} gutterBottom variant="h6" component="div">
                      Mobiles & Tablets
                    </Typography>
                  </CardContent>
                </div>
                </div>
               
              </div>
            </CardActionArea>
          </Card>

          <Card id={2} className={2 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(2) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
          <CardActionArea style={{height:'100%',padding: '7px'}}>
              <div style={{ padding: 4, zIndex: 10 }}>
                <div className='centerContent'>
                  <IoTvSharp style={{padding:'10px'}} className={2 === selectedIndex ? '' : 'selectedWhite'} size={iconSize} />
                  <div >
                  <CardContent sx={{ padding: 0 }}>
                    <Typography className={2 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0,fontSize:'17px',marginBottom:0 }} gutterBottom variant="h6" component="div">
                      TV
                    </Typography>
                  </CardContent>
                </div>
                </div>
              
              </div>
            </CardActionArea>
          </Card>

          <Card id={3} className={3 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(3) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
          <CardActionArea style={{height:'100%',padding: '7px'}}>
              <div style={{ padding: 4 }}>
                <div className='centerContent'>
                  <DiHtml5DeviceAccess style={{padding:'10px'}} className={3 === selectedIndex ? '' : 'selectedWhite'} size={iconSize} />
                  <div >
                  <CardContent sx={{ padding: 0 }}>
                    <Typography className={3 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0,fontSize:'17px',marginBottom:0 }} gutterBottom variant="h6" component="div">
                      Box & Stick
                    </Typography>
                  </CardContent>
                </div>
                </div>
               
              </div>
            </CardActionArea>
          </Card>

          <Card id={4} className={4 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(4) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
          <CardActionArea style={{height:'100%',padding: '7px'}}>
              <div style={{ padding: 4 }}>
                <div className='centerContent'>
                  <MdCast style={{padding:'10px'}} className={4 === selectedIndex ? '' : 'selectedWhite'} size={iconSize} />
                  <div >
                  <CardContent sx={{ padding: 0 }}>
                    <Typography className={4 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0,fontSize:'17px',marginBottom:0 }} gutterBottom variant="h6" component="div">
                      Casting
                    </Typography>
                  </CardContent>
                </div>
                </div>
                
              </div>
            </CardActionArea>
          </Card>
        </Box>



        <div className='bottomContainer'>
          <SwipeableViews index={selectedIndex} >
            <div> {0 === selectedIndex ? <WebSetup></WebSetup> : ''} </div>
            <div> {1 === selectedIndex ? <MobSetup></MobSetup> : ''} </div>
            <div>  {2 === selectedIndex ? <Tv></Tv> : ''} </div>
            <div>  {3 === selectedIndex ? <BoxStick></BoxStick> : ''} </div>
            <div>{4 === selectedIndex ? <Casting></Casting> : ''} </div>


          </SwipeableViews>
        </div>

      </div>
    </>
  )
}

export default SetupPlateform