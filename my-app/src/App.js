import React from 'react'
import Layout from './Layout'
import "./App.css"
import DesktopNavbar from './components/DesktopNavbar'
import DivScroll from './components/DivScroll'
const App = () => {
  return (
   <>
       {/* navbar */}
       <DivScroll></DivScroll>
     <DesktopNavbar></DesktopNavbar>
     
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
    
    <Layout>
    </Layout>
   </>
  )
}

export default App