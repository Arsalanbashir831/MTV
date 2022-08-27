import React from 'react'
import Discover from '../components/Discover'
import Features from '../components/Features'
import  './Home.css'

const Home = () => {
  return (
   <>
   <div className='Home_Section'>  
  <Discover></Discover>
  <Features></Features>
   </div>
   </>
  )
}

export default Home