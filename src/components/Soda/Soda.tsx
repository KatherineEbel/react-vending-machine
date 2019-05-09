import * as React from 'react'
import { Link } from 'react-router-dom'
import './Soda.scss'

function Soda (): React.ReactElement {
  return (
    <div className="Soda">
      <h1>Soda Page</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default Soda
