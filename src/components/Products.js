import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export const Products = () => {

    return (
        <div>
           <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link  className="nav-link" to="features">
              Feature
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="new">
              New Products
            </Link>
          </li>
        </ul>
        <Outlet />
        </div>
    )
}
