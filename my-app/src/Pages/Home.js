import React from 'react'
import Discover from '../components/Discover'
import Features from '../components/Features'
import {History} from '../components/History'
import Uptime from '../components/Uptime'

import  './Home.css'

const Home = () => {
  return (
   <>
   <div className='Home_Section'>  
  <Discover></Discover>
  <Features></Features>
  <History></History>
  <Uptime></Uptime>
 
   </div>
   </>
  )
}

export default Home