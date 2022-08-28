

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
import './ChannelsGrid.css'
import { ChannelNames } from './../Data/ChannelNames'
const ChannelsGrid = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [firstHalfArray, setFirstHalfArray] = React.useState([...ChannelNames[0]].splice(0, Math.ceil(ChannelNames[0].length / 2)))
    const [secondHalfArray, setSecondHalfArray] = React.useState([...ChannelNames[0]].splice(Math.ceil(ChannelNames[0].length / 2)))
    const handleChange = (index) => {
        setSelectedIndex(index);
        setFirstHalfArray([...ChannelNames[index]].splice(0, Math.ceil(ChannelNames[index].length / 2)))
        setSecondHalfArray([...ChannelNames[index]].splice(Math.ceil(ChannelNames[index].length / 2)))
    }
    return (
        <div class="ccc_column ccc_countryList">
            <div class="v-virtual-scroll">
                <div class="v-virtual-scroll__container" style={{ height: '3195px', alignContent: 'center' }}>
                    <Box sx={{ flexGrow: 1, margin: '5%' }}>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={4}>
                                <div
                                    style={{ background: 'purple', minHeight: '806px', maxHeight: '806px', overflow: 'auto', borderRadius: 6 }}>
                                    <List>
                                        {Languages.map((element, index) => {
                                            console.log(element);
                                            console.log(index);
                                            let temp = element.slice(0, 25)

                                            return (

                                                <ListItem onClick={() => { handleChange(index) }} key={index} id={index} disablePadding sx={{ padding: 0.2 }} >
                                                    <div className={selectedIndex === index ? 'divSelected' : 'divUnselected'}>
                                                        <ListItemButton sx={{ background: 'white', borderRadius: 2 }}>
                                                            <ListItemText style={{ whiteSpace: 'nowrap' }} primary={temp} />
                                                            {selectedIndex === index ?
                                                                <ListItemIcon style={{ paddingLeft: '11%' }} >
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
                                <div style={{ background: '#fff', minHeight: '806px', maxHeight: '806px', overflow: 'auto', borderRadius: 6 }}>
                                    <div class="ccc_column ccc_channelList">
                                        <div class="ccc_searchBar">
                                            <input type="text" name="searchbar" placeholder="Search your favorite channel here …" />
                                        </div>

                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                                <Grid container item xs={6} direction="row">
                                                    <div className='divUnselected'>
                                                        <List disablePadding >
                                                            {firstHalfArray.map((element, index) => {
                                                                return (
                                                                    <ListItem key={index} disablePadding sx={{ background: 'purple', borderRadius: 2, padding: 0.7, marginTop: 1 }}>
                                                                        <ListItemText primary={element} />
                                                                    </ListItem>
                                                                )
                                                            })}

                                                        </List>
                                                    </div>
                                                </Grid>

                                                <Grid container item xs={6} direction="column">
                                                    <List disablePadding >
                                                        {secondHalfArray.map((element, index) => {
                                                            return (
                                                                <ListItem key={index} disablePadding sx={{ background: 'purple', borderRadius: 2, padding: 0.7, marginTop: 1 }}>
                                                                    <ListItemText primary={element} />
                                                                </ListItem>
                                                            )
                                                        })}

                                                    </List>
                                                </Grid>

                                            </Grid>
                                        </Box>
                                    </div>

                                </div>
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

export default ChannelsGrid