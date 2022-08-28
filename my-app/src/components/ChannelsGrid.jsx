

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
            <div class="ccc_row"><select name="countries" id="countrieName"><option value="58">ESPANA -  FUTBOL</option><option value="59">ESPANA - DEPORTES</option><option value="60">ESPANA -  CINE</option><option value="62">ESPANA - ESTILO DE VIDA</option><option value="61">ESPANA -  NINOS</option><option value="65">ESPANA -  TDT</option><option value="63">ESPANA -  CULTURA</option><option value="64">ESPANA -  MUSICA</option><option value="69">PORTUGAL - DESPORTO</option><option value="67">PORTUGAL - GENERALISTAS</option><option value="68">PORTUGAL - NOTICIAS</option><option value="70">PORTUGAL - SERIE &amp; MOVIE</option><option value="73">PORTUGAL - MUSICA</option><option value="74">PORTUGAL - INTERNACIONAIS</option><option value="71">PORTUGAL - INFANTIL</option><option value="72">PORTUGAL - CULTURA</option><option value="76">UK - SPORTS</option><option value="126">UK - EPL</option><option value="77">UK - MOVIES</option><option value="78">UK - DOCUMENTARIES</option><option value="86">UK - ENTERTAINMENT</option><option value="83">UK - NEWS</option><option value="82">UK - MUSIC</option><option value="79">UK - KIDS</option><option value="81">UK - INTERNATIONAL</option><option value="84">UK - REGIONAL</option><option value="85">UK - BET</option><option value="136">DE - BASIC</option><option value="137">DE - SPORT</option><option value="138">DE - NEWS</option><option value="135">DE - MUSIK</option><option value="134">DE - KINO/SERIEN</option><option value="133">DE - KINDER</option><option value="139">AUSTRIA</option><option value="17">HOLLAND</option><option value="5">ITALIA</option><option value="7">ARABIC</option><option value="52">ARABIC - BEIN SPORTS</option><option value="4">FRANCE</option><option value="19">TURKIYE</option><option value="35">ROMANIA</option><option value="23">SCANDINAVE</option><option value="36">SWEDEN</option><option value="30">POLAND</option><option value="51">ALBANIA</option><option value="29">BALCAN</option><option value="38">BOSNA / HERSEK</option><option value="25">CZECH</option><option value="54">HUNGARIA</option><option value="53">BULGARIA</option><option value="57">SWITZERLAND</option><option value="26">GREEK</option><option value="24">BRAZIL</option><option value="28">PAKISTANI</option><option value="27">INDIA</option><option value="32">CANADA</option><option value="87">SOUTH AFRICA</option><option value="125">ARGENTINA</option><option value="116">MEXICO</option><option value="117">COLUMBIA</option><option value="124">URUGUAY</option><option value="122">ECUADOR</option><option value="121">PERU</option><option value="120">CHILE</option><option value="118">BOLIVIA</option><option value="142">LATINO - CINE</option><option value="141">LATINO - DEPORTE</option><option value="131">MLB</option><option value="130">NHL</option><option value="129">NFL</option><option value="128">NBA</option><option value="152">LATINO - INFANTILE</option><option value="153">COSTA RICA</option><option value="154">REPUBLICA DOMINICANA</option><option value="155">VENEZUELA</option><option value="156">LATINO - 24/7 SERIES</option><option value="157">PEACOCK</option><option value="151">LATINO - CULTURALE</option><option value="150">US MUSIC</option><option value="149">US News &amp; Local</option><option value="148">US KIDS</option><option value="147">US Documentaries</option><option value="146">US Entertainment</option><option value="145">US CINEMA</option><option value="144">US SPORT</option><option value="143">PPV - SPORT</option><option value="158">Scottish Premiership</option></select> <div class="ccc_arrow"><img src=""/></div></div>
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

                                                <ListItem className='listItem' sx={{ backgroundColor: blurredColor , maxHeight:'3px', padding:1 ,marginTop:0.5 }} onClick={() => { handleChange(index) }} key={index} id={index} disablePadding >
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
                                                                <ListItemText className='text' style={{ whiteSpace: 'nowrap', color: 'white' }} primary={temp} />
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
                                <div style={{ background: backgroundColor, minHeight: '806px', maxHeight: '806px', overflow: 'auto', borderRadius: '4px' }}>
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