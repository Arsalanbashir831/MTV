

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ChannelsLeftSidebar = () => {

    return (
        <div class="ccc_column ccc_countryList">
            <div class="v-virtual-scroll">
                <div class="v-virtual-scroll__container" style={{ height: '3195px' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={4}>
                                <div
                                    style={{ background: 'purple', minHeight: '806px', maxHeight: '806px', overflow: 'auto', borderRadius: 6 }}>
                                    <List>
                                        <ListItem>
                                            <ListItemButton sx={{ background: 'pink' }}>
                                                <ListItemText primary="Inbox" />
                                                <ListItemIcon>
                                                    <InboxIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem >
                                            <ListItemButton sx={{ background: 'pink' }}>
                                                <ListItemText primary="Drafts" />
                                                <ListItemIcon>
                                                    <DraftsIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
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