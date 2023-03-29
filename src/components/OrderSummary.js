import React from 'react'
import { useNavigate } from 'react-router-dom'


export const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <div>
           <h4> Order Confirmed !!!</h4>
            <button onClick={() => {navigate(-1)}} className='btn btn-secondary'>Go Back</button>

        </div>
    )
}
