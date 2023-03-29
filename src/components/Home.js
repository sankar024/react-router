import React from 'react';
import { useNavigate } from 'react-router-dom'


export const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
             <h4>Home Page</h4>
             <button onClick={() => {navigate('orderSummary')}} className='btn btn-primary'>Place Order</button>
        </div>
    )
}
