

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

    const blurredColor = 'hsla(0,0%,100%,.1)'
    const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--components-dark-theme')
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [firstHalfArray, setFirstHalfArray] = React.useState([...ChannelNames[0]].splice(0, Math.ceil(ChannelNames[0].length / 2)))
    const [secondHalfArray, setSecondHalfArray] = React.useState([...ChannelNames[0]].splice(Math.ceil(ChannelNames[0].length / 2)))
    const handleChange = (index) => {
        setSelectedIndex(index);
        setFirstHalfArray([...ChannelNames[index]].splice(0, Math.ceil(ChannelNames[index].length / 2)))
        setSecondHalfArray([...ChannelNames[index]].splice(Math.ceil(ChannelNames[index].length / 2)))
    }

    const searchResults = () => {
        let searchQuery = document.querySelector('input').value
        let results = []
        for (let index = 0; index < ChannelNames.length; index++) {
            const tempChannel = ChannelNames[index];
            for (let i = 0; i < tempChannel.length; i++) {
                const result = tempChannel[i];
                if (result.includes(searchQuery)) {
                    results.push(result);
                }
            }
        }
        setFirstHalfArray(results.splice(0, Math.ceil(results.length / 2)));
        setSecondHalfArray(results.splice(Math.ceil(results.length / 2)));
    }
    return (
        <div class="ccc_column ccc_countryList">
            <div class="v-virtual-scroll">
                <div class="v-virtual-scroll__container" style={{ height: '3195px', alignContent: 'center' }}>
                    <Box sx={{ flexGrow: 1, margin: '5%' }}>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={4}>
                                <div
                                    style={{ background: backgroundColor, minHeight: '806px', maxHeight: '806px', overflow: 'auto', borderRadius: 6, padding:'2.5px 5px 0;' }}>
                                    <List>
                                        {Languages.map((element, index) => {
                                            console.log(element);
                                            console.log(index);
                                            let temp = element.slice(0, 25)

                                            return (

                                                <ListItem sx={{ backgroundColor: blurredColor }} onClick={() => { handleChange(index) }} key={index} id={index} disablePadding sx={{ padding: 0.2 }} >
                                                    <div className={selectedIndex === index ? 'divSelected' : 'divUnselectedColored'}>
                                                        <ListItemButton sx={{ paddingLeft: 1, paddingRight: 1 }} selected={selectedIndex === index ? 'true' : 'false'} sx={{ color: 'white', borderRadius: 2 }}>

                                                            {selectedIndex === index ?
                                                                <>
                                                                    <ListItemText style={{ whiteSpace: 'nowrap', color: backgroundColor }} primary={temp} />
                                                                    <ListItemIcon style={{ paddingLeft: '11%' }} >
                                                                        <ArrowForwardIosRoundedIcon style={{ color: backgroundColor }} />
                                                                    </ListItemIcon>
                                                                </>
                                                                :
                                                                <ListItemText style={{ whiteSpace: 'nowrap', color: 'white' }} primary={temp} />
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
                                <div style={{ background: backgroundColor, minHeight: '806px', maxHeight: '806px', overflow: 'auto', borderRadius: 6 }}>
                                    <div class="ccc_column ccc_channelList">
                                        <div class="ccc_searchBar">
                                            <input onInput={searchResults} type="text" name="searchbar" placeholder="Search your favorite channel here …" />
                                        </div>

                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                                <Grid container item xs={6} direction="row">
                                                    <div className='divUnselected'>
                                                        <List disablePadding >
                                                            {firstHalfArray.map((element, index) => {
                                                                return (
                                                                    <ListItem key={index} disablePadding sx={{ background: 'hsla(0,0%,100%,.1)', borderRadius: 2, padding: 0.7, marginTop: 1 }}>
                                                                        <ListItemText sx={{ color: 'white', paddingLeft: 1 }} primary={element} />
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
                                                                <ListItem key={index} disablePadding sx={{ background: 'hsla(0,0%,100%,.1)', borderRadius: 2, padding: 0.7, marginTop: 1 }}>
                                                                    <ListItemText sx={{ color: 'white', paddingLeft: 1 }} primary={element} />
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