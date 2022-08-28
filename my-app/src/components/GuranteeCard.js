import React from 'react'
import "./GuranteeCard.css"
import guranteeDark from '../assets/guranteeDark.svg'
const GuranteeCard = () => {
  return (
    <div id="ccc_guarantee"><div class="ccc_container"><div class="ccc_column"><img src={guranteeDark} alt="moneyback"/></div> <div class="ccc_column"><p class="ccc_title">30-Days Money-Back Guarantee</p> <h2 class="ccc_subtitle">You've got nothing to lose and everything to gain with our intuitive IPTV service and 30-day money-back guarantee. For the fastest and most sophisticated IPTV provider, look no further than Cccambox TV.</h2></div></div></div>
  )
}

export default GuranteeCard