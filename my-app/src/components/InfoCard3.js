import React from 'react'
import "./InfoCard3.css";
import mainImg3 from '../assets/infoCard3.webp'
import dollar from "../assets/dollar.svg";
const InfoCard3 = () => {
    return (
        <section id="info3_Section"><div class="ccc_container"><div class="ccc_column"><p class="ccc_title">
            Thousands<span>of Movies &amp; Series</span></p> <h2 class="ccc_info">We’ve made the impossible possible, with a full library of thousands of Movies &amp; Series (tv shows) you will be able to watch trailers, read reviews and get shows' seasons details, get the latest information on upcoming movies releases. Choosing the right movie has never been so easy.</h2> <div class="ccc_joinus ccc_info3"><button class="join">
                JOIN US NOW
                <span>Instant Access</span></button> <div><img src={dollar} alt="moneyback" /> <p class="black">
                    30-Days Money-Back Guarantee
                </p></div></div></div> <div class="ccc_column"><div><img  src={mainImg3} class="ccc_app" lazy="loaded" /></div></div></div></section>
    )
}

export default InfoCard3