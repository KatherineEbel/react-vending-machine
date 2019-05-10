import * as React from 'react'
import { Link } from 'react-router-dom'
import './VendingMachine.scss'

function VendingMachine () {
  return (
    <div className="VendingMachine">
      <div className="VendingMachine--title">
        <h1>Hello, I am a vending machine. What would you like to eat?</h1>
      </div>
      <div className="VendingMachine--items">
        <Link to="/soda">Soda</Link>
        <Link to="/chips">Chips</Link>
        <Link to="/sardines">Sardines</Link>
      </div>
    </div>
  )
}

export default VendingMachine
