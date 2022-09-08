
import React from 'react'

const PriceCard = (props) => {
  console.log(props.divId)
    return (
        <> 
         <div id={props.divId}   onClick={props.handleChange}
         className={(props.active===props.divId)?`product selected selectedDiv`:`product`}
         >
                <div className="sold">
                    <p className={(props.active===props.divId)?`sold-text selectedSold-text`:`sold-text`}>Last Sold:<span>{props.lastSold}s ago</span></p>
                </div>
                <div className="productSelect ">
                  {/* selected */}
                    <p className={(props.active===props.divId)? ` selected name  `:`name`}>{props.days+" " }{ props.type+" "}Pass</p>
                </div>
                {/* selected */}
                <p className={(props.active===props.divId)?` selected price `:` price`}>{props.price}<span>{props.currency}</span></p>
                {/* selected */}
                <p className={(props.active===props.divId)?` selected billingcycle `:` billingcycle`}>per {props.billingCycle}</p>
                <div className="save ">
                    <p>Save {props.saving}%</p></div>
              {/* selected */}
                <p className={(props.active===props.divId)?`selected guarantee `:` guarantee `}>7-day money-back guarantee
                </p>
           </div>
           
       
           
        </>
    )
}

export default PriceCard