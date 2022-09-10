import { useEffect } from 'react';
import './Total.css'
import TotalBill from './TotalBill';
import React from 'react';

const Total = ()=>{
    function calculateTotal() {
        const keyMap = Object.keys(TotalBill);
        let sum = 0.0;
        for (let index = 0; index < keyMap.length; index++) {
            const element = parseFloat(TotalBill[keyMap[index]]) ;
            sum = sum + element;
        }
        

        return sum;
    }
    const [total,setTotal] = React.useState(calculateTotal())
    useEffect(() =>{
        setTotal(calculateTotal());
    });
    
    return (
        <div id='total'>
            <p class="title">Total</p>
            <div class="hr"></div>
            <p class="total">{calculateTotal()}€</p>
        </div>
    )
}

export default Total;