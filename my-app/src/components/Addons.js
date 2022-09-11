import React from 'react'
import AddonsCard from './AddonsCard'
import Label from './Label'

const Addons = () => {
    return (
        <section id='addons'>
            <Label no={3} text='Select Addons'></Label>
            <div id='extra' style={{padding:'40px 0px',display: 'flex',flexDirection: 'column',gap: '2rem'}}>

                <AddonsCard type='worldwide' price={10}></AddonsCard>
                <AddonsCard type='adult' price={20}></AddonsCard>
            </div>
        </section>
    )
}

export default Addons