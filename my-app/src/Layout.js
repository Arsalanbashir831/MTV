import React from 'react'

import Channels from './Pages/Channels' 
import Home from './Pages/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
const Layout = () => {
  return (
    <React.Fragment>
      
    
    <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/Channel" element={<Channels></Channels>}/>
    </Routes>
        
   
    
      
       
    
    
  </React.Fragment>
  )
}

export default Layout