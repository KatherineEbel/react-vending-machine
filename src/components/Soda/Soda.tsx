import * as React from 'react'
import { Link } from 'react-router-dom'
import './Soda.scss'
import soda from '../../img/Soda.png'

function Soda (): React.ReactElement {
  return (
    <div className="Soda">
      <div className="Soda--action">
        <h1>OMG SUGAR!</h1>
        <Link to="/">Go Back</Link>
      </div>
      <img src={soda} alt="Coca-Cola"/>
      <img src={soda} alt="Coca-Cola"/>
    </div>
  )
}

export default Soda
