import React from 'react'
import darkHeaderImg from "../assets/ResellerHeadDark.svg"
import "./ResellerHead.css";
const ResellerHead = () => {
    return (
        <>
        
            <section id="ccc_head"><div class="ccc_container"><div class="ccc_column"><div class="ccc_row"><h1 class="ccc_title">the World’s <span>Best</span> IPTV Reseller Program</h1> <h2 class="ccc_subtitle">Earn Easy Money by Selling A Super-Fast, Super-Secure, And The Most Reliable IPTV Service.</h2></div> <div class="ccc_row"><button class="ccc_btn">
                BECOME A RESELLER
                <span>Instant Access</span></button></div></div> <div class="ccc_column"><img src={darkHeaderImg} alt="benef" rel="preload" /></div></div></section>
        </>
    )
}

export default ResellerHead