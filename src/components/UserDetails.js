import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const { userId } = useParams();
    return (
        <div>
            <p>User Details listed here {userId}</p>
        </div>
    )
}
