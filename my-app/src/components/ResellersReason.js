import React from 'react'
import api from '../assets/api.svg';
import dns from '../assets/customdns.svg';
import privacy from '../assets/privacy.svg';
import dashboard from '../assets/rdashboard.svg';
import trial from '../assets/trialacc.svg';
import vip from '../assets/vip.svg';
import ReasonColumn from './ReasonColumn';
import './ResellersReason.css';

const ReasonData=[
  {img: dashboard ,title:'Resellers Dashboard',subtitle:"Automate accounts creation and management by using our API and connect it to your website"},
  {img: api ,title:'Resellers Dashboard',subtitle:"Automate accounts creation and management by using our API and connect it to your website"},
  {img: dns ,title:'Resellers Dashboard',subtitle:"Automate accounts creation and management by using our API and connect it to your website"},
  {img: vip ,title:'Resellers Dashboard',subtitle:"Automate accounts creation and management by using our API and connect it to your website"},
  {img: trial ,title:'Resellers Dashboard',subtitle:"Automate accounts creation and management by using our API and connect it to your website"},
  {img: privacy ,title:'Resellers Dashboard',subtitle:"Automate accounts creation and management by using our API and connect it to your website"}
]

const ResellersReason = () => {
  return (
    <>
      <section id="ccc_reason"><div className="ccc_container"><div className="ccc_header">
        <p className="ccc_title">Why Should You Choose Our IPTV Reseller Program?</p>
         <h2 className="ccc_subtitle">Cccambox is a well-known brand in the IPTV industry. We have been delivering super-fast, highly secure, and the most reliable IPTV service with extraordinary features since 2010 to more than 200 000 users. Here’s what makes the Cccambox TV reseller program an ideal choice.</h2>
         </div>
          <div className="ccc_reasons">
            {ReasonData.map((data, index)=>{
              return(<>
              
              <ReasonColumn img={data.img} title={data.title} subtitle={data.subtitle} key={index} ></ReasonColumn>
              </>)
            })}
                     </div>
                     </div>
                     </section>

    </>
  )
}

export default ResellersReason