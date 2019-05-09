import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'


function NavBar () {
  return (
    <div className="NavBar">
      <nav>
        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        <NavLink to="/soda" activeClassName="active" exact>Soda</NavLink>
        <NavLink to="/chips" activeClassName="active" exact>Chips</NavLink>
        <NavLink to="/sardines" activeClassName="active" exact>Sardines</NavLink>
      </nav>
    </div>
  )

}

export default NavBar
