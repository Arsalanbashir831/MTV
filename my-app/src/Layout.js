import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Home from './Pages/Home';
const Layout = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <div style={{maxWidth:"1000px" ,margin:"auto"}} className='container'>
      <Box sx={{ height: '100vh' }}>
        <Home></Home>
       
      </Box>
    </div>
    
  </React.Fragment>
  )
}

export default Layout