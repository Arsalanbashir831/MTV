import { useEffect } from 'react';
import './Total.css'
import Label from './Label';
import TotalBill from './TotalBill';
import TotalURL from './TotalURL';
import React from 'react';

const Total = () => {
    function calculateTotal() {
        const keyMap = Object.keys(TotalBill);
        let sum = 0.0;
        for (let index = 0; index < keyMap.length; index++) {
            const element = parseFloat(TotalBill[keyMap[index]]);
            sum = sum + element;
        }


        return sum;
    }
    function generateFormula() {
        const keyMap = Object.keys(TotalURL);
        let link = '';
        for (let index = 0; index < keyMap.length; index++) {
            const element = TotalURL[keyMap[index]].url;
            if (element !== ''){
                link = link + "-" + element;
            }
            
        }
        link = link.substring(1)
        console.log(link)
        return link;
    }
    const [total, setTotal] = React.useState(calculateTotal())
    useEffect(() => {
        setTotal(calculateTotal());
    });

    return (
        <>
            <Label no='5' text='Billing'></Label>

            <div id="userInfo" style={{ marginTop: '3%' }}>
                <div id="pricing">

                    {
                        Object.keys(TotalBill).map((value, index) => {
                            console.log(TotalBill[value], TotalURL[Object.keys(TotalURL)[index]].details)
                            if (TotalURL[Object.keys(TotalURL)[index]].details != '')
                                return (
                                    <div class="pricingInfo">
                                        <div class="data">
                                            <p>{TotalURL[Object.keys(TotalURL)[index]].details}</p>
                                        </div>
                                        <div class="price">
                                            <p>{TotalBill[value]} €</p>
                                        </div>
                                    </div>
                                )
                        })
                    }

                    {/* <div class="pricingInfo">
                        <div class="data">
                            <p>Device Type</p>
                        </div>
                        <div class="price">
                            <p>{TotalURL.typeDetails.details}</p>
                        </div>
                    </div> */}

                    <div id='total'>
                        <p class="title">Total</p>
                        <div class="hr"></div>
                        <p class="total">{calculateTotal()}£</p>
                    </div>
                </div>

                <button id="validate" type="submit" class="">
                    {generateFormula()}
                </button>
            </div>
        </>
    )
}

export default Total;