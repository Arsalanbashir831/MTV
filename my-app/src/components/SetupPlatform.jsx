import React from 'react'
import './SetupPlatform.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { MdAccessibilityNew } from "react-icons/md";
import SwipeableViews from 'react-swipeable-views';
import WebSetup from './WebSetup';
import Casting from './Casting';
// import MobSetup from './MobSetup';
// import Tv from './Tv';
import BoxStick from './BoxStick';
import MobSetup from './MobSetup';
import Tv from './Tv';
// import BoxStick from './BoxStick';

// import Casting from './Casting';

import MediaQuery from 'react-responsive'
const SetupPlateform = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const iconSize = 122;
  const iconSizeResponsive = 74;

  const handleChangeIndex = (index) => {
    console.log(document.getElementsByClassName('bottomContainer'))
    setSelectedIndex(index);
    document.getElementsByClassName('mainContainerDesktop')[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })

  }
  return (


    <>
      <div className='mainContainerDesktop'>
        <MediaQuery minWidth={769}>
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
              <CardActionArea>
                <div style={{ padding: 4 }}>
                  <div className='centerContent'>
                    <MdAccessibilityNew className={0 === selectedIndex ? '' : 'selectedWhite'} size={iconSize} />
                  </div>
                  <div className='centerContent'>
                    <CardContent sx={{ padding: 0 }}>
                      <Typography sx={{ padding: 0 }} gutterBottom variant="h6" component="div" className={0 === selectedIndex ? '' : 'selectedWhite'}>
                        Lizard
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </CardActionArea>
            </Card>

            <Card id={1} className={1 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(1) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
              <CardActionArea>
                <div style={{ padding: 4 }}>
                  <div className='centerContent'>
                    <MdAccessibilityNew size={iconSize} className={1 === selectedIndex ? '' : 'selectedWhite'} />
                  </div>
                  <div className='centerContent'>
                    <CardContent sx={{ padding: 0 }}>
                      <Typography className={1 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </CardActionArea>
            </Card>

            <Card id={2} className={2 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(2) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
              <CardActionArea>
                <div style={{ padding: 4, zIndex: 10 }}>
                  <div className='centerContent'>
                    <MdAccessibilityNew className={2 === selectedIndex ? '' : 'selectedWhite'} size={iconSize} />
                  </div>
                  <div className='centerContent'>
                    <CardContent sx={{ padding: 0 }}>
                      <Typography className={2 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </CardActionArea>
            </Card>

            <Card id={3} className={3 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(3) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
              <CardActionArea>
                <div style={{ padding: 4 }}>
                  <div className='centerContent'>
                    <MdAccessibilityNew className={3 === selectedIndex ? '' : 'selectedWhite'} size={iconSize} />
                  </div>
                  <div className='centerContent'>
                    <CardContent sx={{ padding: 0 }}>
                      <Typography className={3 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </CardActionArea>
            </Card>

            <Card id={4} className={4 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(4) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
              <CardActionArea>
                <div style={{ padding: 4 }}>
                  <div className='centerContent'>
                    <MdAccessibilityNew className={4 === selectedIndex ? '' : 'selectedWhite'} size={iconSize} />
                  </div>
                  <div className='centerContent'>
                    <CardContent sx={{ padding: 0 }}>
                      <Typography className={4 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
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


        </MediaQuery>


        <MediaQuery minWidth={0} maxWidth={768}>

          <Box
            sx={{
              display: 'grid',
              rowGap: 1,
              gridTemplateColumns: 'repeat(1, 1fr)',
              gridAutoFlow: 'row'

            }}

            className='responsive'

          >
            <Card id={0} className={0 == selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(0) }} sx={{ minWidth: '90%', maxHeight: '85px' }} >
              <CardActionArea>
                <div className='responsiveStyle'>
                  <div >
                    <MdAccessibilityNew className={0 === selectedIndex ? '' : 'selectedWhite'} size={iconSizeResponsive} />
                  </div>
                  <div >
                    <CardContent sx={{ padding: 0 }}>
                      <Typography sx={{ padding: 0, marginLeft: '50%' }} gutterBottom variant="h6" component="div" className={0 === selectedIndex ? '' : 'selectedWhite'}>
                        Lizard
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </CardActionArea>
            </Card>

            <Card id={1} className={1 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(1) }} sx={{ minWidth: '90%', maxHeight: '85px' }} >
              <CardActionArea>
                <div className='responsiveStyle'>
                  <div >
                    <MdAccessibilityNew size={iconSizeResponsive} className={1 === selectedIndex ? '' : 'selectedWhite'} />
                  </div>
                  <div >
                    <CardContent sx={{ padding: 0, marginLeft: '50%'  }}>
                      <Typography className={1 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </CardActionArea>
            </Card>

            <Card id={2} className={2 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(2) }} sx={{ minWidth: '90%', maxHeight: '85px' }} >
              <CardActionArea>
                <div className='responsiveStyle'>
                  <div >
                    <MdAccessibilityNew className={2 === selectedIndex ? '' : 'selectedWhite'} size={iconSizeResponsive} />
                  </div>
                  <div >
                    <CardContent sx={{ padding: 0, marginLeft: '50%'  }}>
                      <Typography className={2 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </CardActionArea>
            </Card>

            <Card id={3} className={3 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(3) }} sx={{ minWidth: '90%', maxHeight: '85px' }} >
              <CardActionArea>
                <div className='responsiveStyle'>
                  <div >
                    <MdAccessibilityNew className={3 === selectedIndex ? '' : 'selectedWhite'} size={iconSizeResponsive} />
                  </div>
                  <div >
                    <CardContent sx={{ padding: 0, marginLeft: '50%'  }}>
                      <Typography className={3 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </CardActionArea>
            </Card>

            <Card id={4} className={4 === selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex(4) }} sx={{ minWidth: '90%', maxHeight: '85px' }} >
              <CardActionArea>
                <div className='responsiveStyle'>
                  <div >
                    <MdAccessibilityNew className={4 === selectedIndex ? '' : 'selectedWhite'} size={iconSizeResponsive} />
                  </div>
                  <div >
                    <CardContent sx={{ padding: 0, marginLeft: '50%'  }}>
                      <Typography className={4 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </CardActionArea>
            </Card>
          </Box>

          <div className='bottomContainerResponsive'>
            <SwipeableViews index={selectedIndex} >
              <div> {0 === selectedIndex ? <WebSetup></WebSetup> : ''} </div>
              <div> {1 === selectedIndex ? <MobSetup></MobSetup> : ''} </div>
              <div>  {2 === selectedIndex ? <Tv></Tv> : ''} </div>
              <div>  {3 === selectedIndex ? <BoxStick></BoxStick> : ''} </div>
              <div>{4 === selectedIndex ? <Casting></Casting> : ''} </div>


            </SwipeableViews>
          </div>

        </MediaQuery>




      </div>
    </>
  )
}

export default SetupPlateform