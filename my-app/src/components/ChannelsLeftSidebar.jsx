

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import DraftsIcon from '@mui/icons-material/Drafts';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Languages } from '../Data/Languages'
import './ChannelsLeftSidebar.css'
const ChannelsLeftSidebar = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <div class="ccc_column ccc_countryList">
            <div class="v-virtual-scroll">
                <div class="v-virtual-scroll__container" style={{ height: '3195px', alignContent:'center' }}>
                    <Box sx={{ flexGrow: 1 , margin:'5%'}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={4}>
                                <div
                                    style={{ background: 'purple', minHeight: '806px', maxHeight: '806px', overflow: 'auto', borderRadius: 6 }}>
                                    <List>
                                        {Languages.map((element, index) => {
                                            console.log(element);
                                            console.log(index);

                                            return (

                                                <ListItem onClick={() => { setSelectedIndex(index) }} key={index} id={index} disablePadding sx={{ padding: 0.3 }} >
                                                    <div className={selectedIndex === index ? 'divSelected': 'divUnselected'}>
                                                        <ListItemButton  sx={{ background: 'white', borderRadius: 2 }}>
                                                            <ListItemText primary={element} />
                                                            {selectedIndex === index ?
                                                                <ListItemIcon style={{paddingLeft:'50%'}} >
                                                                    <ArrowForwardIosRoundedIcon />
                                                                </ListItemIcon>
                                                                :
                                                                ''
                                                            }
                                                        </ListItemButton>
                                                    </div>
                                                </ListItem>

                                            )

                                        })}


                                    </List>
                                </div>
                            </Grid>
                            <Grid item xs={6} md={8}>

                            </Grid>

                        </Grid>
                    </Box>

                </div>

                <div class="ccc_column ccc_channelList">

                </div>
            </div>
        </div>
    )
}

export default ChannelsLeftSidebar