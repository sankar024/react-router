import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === "Active"
    return (
        <div>
            <h3>User List</h3>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({"filter" : "Active"})} className="btn btn-primary me-2"> Active Users</button>
                <button onClick={() => setSearchParams({})} className="btn btn-secondary"> Reset Filter</button>
            </div>
            {showActiveUsers ? 'Showing Active Users' : "Showing All Users"}
        </div>
    )
}