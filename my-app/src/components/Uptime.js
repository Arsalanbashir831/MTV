import React from 'react'
import "./Uptime.css"
import progress from "../assets/progress.svg"
const Uptime = () => {
    return (
        <>
            <div id='uptime_Section'>
                <p className='ccc_title'>
                    Uptime
                    <span> Last 90 days</span>
                </p>

                <div className='ccc_container'>
                    <div className='ccc_rows'>
                        <p className='ccc_name'>IPTV Panel</p>
                        <p className='ccc_percent'>100.00%</p>
                        <div className='ccc_img'>
                            {/* image */}
                            <img className='ccc_img' src={progress} alt=""/>
                        </div>

                        <div class="ccc_status">
                            <div id="ccc_badge">
                                <div class="ccc_circle"></div>
                            </div>
                            <p class="ccc_type">Up</p>
                        </div>
                    </div>
                    <hr className='ccc_divider' />
                    <div className='ccc_rows'>
                        <p className='ccc_name'>IPTV Panel</p>
                        <p className='ccc_percent'>100.00%</p>
                        <div className='ccc_img'>
                            {/* image */}
                            <img className='ccc_img' src={progress} alt=""/>
                        </div>

                        <div class="ccc_status">
                            <div id="ccc_badge">
                                <div class="ccc_circle"></div>
                            </div>
                            <p class="ccc_type">Up</p>
                        </div>
                    </div>
                    <hr className='ccc_divider' />
                    <div className='ccc_rows'>
                        <p className='ccc_name'>IPTV Panel</p>
                        <p className='ccc_percent'>100.00%</p>
                        <div className='ccc_img'>
                            {/* image */}
                            <img className='ccc_img' src={progress} alt=""/>
                        </div>

                        <div class="ccc_status">
                            <div id="ccc_badge">
                                <div class="ccc_circle"></div>
                            </div>
                            <p class="ccc_type">Up</p>
                        </div>
                    </div>
                 
                </div>
            </div>
        </>
    )
}

export default Uptime