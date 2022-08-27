import React from 'react'
import  './Features.css'

import antiBuffer from "../assets/antibuffer.svg";
import hd from "../assets//hd.svg";
import multiAccess from "../assets/access.svg";
import play from "../assets/play.svg";

const Features = () => {
  return (
   <>
   <div id='features_Section'>
    <div className='ccc_container'>
    <div class="ccc_column">
        <img src={play} alt="Play Channels"/>
        <p class="ccc_title">8000+ TV Channels</p>
     </div>
     <div class="ccc_column">
        <img src={multiAccess} alt="Play Channels"/>
        <p class="ccc_title">Mutli Users Access</p>
     </div>
      
     <div class="ccc_column">
        <img src={hd} alt="Play Channels"/>
        <p class="ccc_title">FHD & HD Quality</p>
     </div>
     <div class="ccc_column">
        <img src={antiBuffer} alt="Play Channels"/>
        <p class="ccc_title">Anti-Buffer™ 3.0</p>
     </div>
   
    
    
    
    
    </div>
   </div>
   </>
  )
}

export default Features