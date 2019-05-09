import * as React from 'react'
import { Link } from 'react-router-dom'
import './VendingMachine.scss'

function VendingMachine () {
  return (
    <div>
      <h1>Hello, I am a vending machine. What would you like to eat?</h1>
      <ul>
        <li><Link to="/soda">Soda</Link></li>
        <li><Link to="/chips">Chips</Link></li>
        <li><Link to="/sardines">Sardines</Link></li>
      </ul>
    </div>
  )
}

export default VendingMachine
