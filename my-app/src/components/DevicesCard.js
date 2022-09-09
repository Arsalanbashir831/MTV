import * as React from 'react';


export default function OutlinedCard(props) {
    return (
        <>
        <div id={props.divId} onClick={props.handleChange}
         className={(props.active===props.divId)?`selectedDiv device`:`device`}>
    <div className="content">

    <div style={{marginRight:"20px"}} className={(props.active===props.divId)?`checkbox devCheck checked`:` devCheck checkbox`}>
            {/* <CheckIcon   class={(props.active===props.divId)?`marked`:`Notmarked`} style={{fontSize:"1rem" }} ></CheckIcon> */}
            {/* <FontAwesomeIcon class={(props.active===props.divId)?`marked`:`Notmarked`} style={{fontSize:"1rem" }} icon="fa-solid fa-check" /> */}
           <div className={(props.active===props.divId)?`marked `:`Notmarked`} style={{fontSize:"1rem",textAlign:"center" }}>
            <i className={`fa-solid fa-check`}></i>
           </div>
          </div>
        <div className={(props.active===props.divid)?`info `:`info`}   >
            <p  className={`title`}>{props.devices}</p>
            <p className={`description`}>{props.description}
            </p>
        </div>
    </div>
    <div className="pricing ">
        <p className={`price `}>
           {props.price}<span>€</span>/{props.duration}
        </p>
       
    </div>
</div>
        </>
    );
}