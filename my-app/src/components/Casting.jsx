import chromecast from '../assets/chromecast.svg'
import airplay from '../assets/airplay.svg'
import miracast from '../assets/miracast.png'
const Casting = (props) => {
    return (
        <>
            
                <div id= 'ccc_cast'>
                    <div className='ccc_box'>
                        <h2 class="ccc_title">Cast our IPTV with any TV screen.</h2>
                        <h2 class="ccc_subtitle">Casting work on most apps and allows you to stream content from your smart device.</h2>
                    </div>

                    <div className="ccc_box">
                        <p className="ccc_name">Google Chromecast.</p>
                        <img src= {chromecast} alt="chromecast" class="ccc_img"></img>
                    </div>
                </div>

            
        </>
    )
}

export default Casting;