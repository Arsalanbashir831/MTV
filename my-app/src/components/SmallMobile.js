import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
const SmallMobile = (props) => {
  return (
    
      <div style={{minWidth:"100%",minHeight:"10%"}} id={props.divId}   onClick={props.handleChange} 
       class={(props.active===props.divId)?`product selected selectedDiv smallMobileProduct`:`product smallMobileProduct`}>
      <div style={{position:"relative",top:"-17px"}} class="save">
        <p>Save {props.saving}%</p>
        </div>
        <div class="productSelect" 
        style={{display:"flex",
        alignItems: 'center',
        position: 'relative',
        top: '-20px',
        fontSize: '20px',
        justifyContent: 'start',
        gap: '4rem',
      
      }}
         >
          <div style={{marginLeft:"20px"}} class={(props.active===props.divId)?`checkbox checked`:`checkbox`}>
            {/* <CheckIcon   class={(props.active===props.divId)?`marked`:`Notmarked`} style={{fontSize:"1rem" }} ></CheckIcon> */}
            {/* <FontAwesomeIcon class={(props.active===props.divId)?`marked`:`Notmarked`} style={{fontSize:"1rem" }} icon="fa-solid fa-check" /> */}
           <div class={(props.active===props.divId)?`marked`:`Notmarked`} style={{fontSize:"1rem",textAlign:"center" }}>
            <i className={`fa-solid fa-check`}></i>
           </div>
          </div>
          <p  className={(props.active===props.divId)? ` selected name  `:`name`}>{props.days+" " }{ props.type+" "}Pass</p>
         
        <p style={{fontSize:'20px'}} className={(props.active===props.divId)?` selected price `:` price`}>{props.price}<span>{props.currency}</span></p>
        </div>
       
   
    </div>
  )
}

export default SmallMobile