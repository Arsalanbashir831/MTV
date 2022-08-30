import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Channels from './Pages/Channels' 
import Home from './Pages/Home';
import Footer from './components/Footer';
const Layout = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <div style={{maxWidth:"1040px" ,margin:"auto"}} className='container'>
      <Box sx={{ height: '100vh' }}>
        <Home></Home>
       
      </Box>
    </div>
    
  </React.Fragment>
  )
}

export default Layout