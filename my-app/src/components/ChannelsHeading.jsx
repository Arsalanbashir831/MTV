import './ChannelsHeading.css'
import ChannelsLeftSidebar from '../components/ChannelsGrid';
const ChannelsHeading = (props) => {
    return (
        <div id="ccc_channels">
            <section id="ccc_channelHead">
                <h1 className="ccc_title">Our Full IPTV Channels List</h1>
                <h2 className="ccc_subtitle">An easy access and super simple IPTV service for all your devices.</h2>
                <div className="ccc_container">
                <ChannelsLeftSidebar></ChannelsLeftSidebar>
             
            </div>
            </section>
        </div>
    )
}

export default ChannelsHeading;