import * as React from 'react'
import './Chips.scss'
import { Link } from 'react-router-dom'

function Chips ():React.ReactElement {
  return (
    <div>
      <h1>Chips Page</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default Chips
