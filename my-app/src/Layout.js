import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Home from './Pages/Home';
import Footer from './components/Footer';
import Main from './Pages/Main';
const Layout = () => {
  return (
    <React.Fragment>
      {/* Routes will be initialized here  */}
          {/* <Home></Home> */}
          <Main></Main>
    </React.Fragment>
  )
}

export default Layout