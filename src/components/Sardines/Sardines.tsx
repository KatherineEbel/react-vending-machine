import * as React from 'react'
import './Sardines.scss'
import { Link } from 'react-router-dom'

function Sardines (): React.ReactElement {
  return (
    <div className="Sardines">
      <div className="Sardines--actions">
        <h1>You don't eat the sardines. The sardines, they eat you!</h1>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  )
}

export default Sardines
