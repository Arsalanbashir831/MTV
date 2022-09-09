import React from 'react'
import addon1 from '../assets/addon1.svg'
const AddonsCard = () => {
  return (
    <div id="extraConnect" class=""><div class="content"><img src={addon1} alt="extra connect"/> <div class="info"><p class="title">Extra Connection</p> <p class="description">
    Use your IPTV on multiple devices at the same time
  </p></div></div> <div class="pricing"><p class="price">
    1.67<span>€</span>/month
  </p> <div class="check"><div class="circle"></div></div></div></div>
  )
}

export default AddonsCard