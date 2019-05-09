import * as React from 'react'
import './Sardines.scss'
import { Link } from 'react-router-dom'

function Sardines (): React.ReactElement {
  return (
    <div className="Sardines">
      <h1>Sardines Page</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default Sardines
