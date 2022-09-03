import chromecast from '../assets/chromecast.svg'
import airplay from '../assets/airplay.svg'
import miracast from '../assets/miracast.png'

import './Casting.css'
const Casting = (props) => {
    return (
        <>
            <div className='v-window__container' style={{maxWidth:'763px'}}>
                {/* <div id= 'ccc_cast'>
                    <div className='ccc_box'>
                        <h2 class="ccc_title">Cast our IPTV with any TV screen.</h2>
                        <h2 class="ccc_subtitle">Casting work on most apps and allows you to stream content from your smart device.</h2>
                    </div>

                    <div className="ccc_box">
                        <p id='paragraph' class="ccc_name">Google Chromecast.</p>
                        <img src= {chromecast} alt="chromecast" class="ccc_img"></img>
                    </div>
                </div> */}

                
                <div id="ccc_cast"><div className="ccc_box"><h2 className="ccc_title">Cast our IPTV with any TV screen.</h2> <h2 className="ccc_subtitle">Casting work on most apps and allows you to stream content from your smart device.</h2></div> <div className="ccc_box"><p className="ccc_name">Google Chromecast.</p> <img src={chromecast} alt="chromecast" className="ccc_img" /></div> <div className="ccc_box"><p className="ccc_name">APPLE airplay</p> <img src={airplay} alt="airplay" className="ccc_img" /></div> <div className="ccc_box"><p className="ccc_name">MIRACAST</p> <img src={miracast} alt="miracast" className="ccc_img" /></div> <div className="ccc_box"><div className="ccc_notice"><h2 className="ccc_subtitle">
                    *Casting only works if devices are connected to the same local network.
                </h2></div></div></div>



            </div>
        </>
    )
}

export default Casting;