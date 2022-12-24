import React from 'react'
import { Link } from 'react-router-dom'

export default function associateType() {
  return (


<div className="associatePage">

    <div className="associateType">
        <Link to="/associateProduct">
        <button>
            <img src={require('../images/assPro.png')} alt="" className="associateTypeImage"/>
        </button>
        </Link>
        <Link to="/associate">
        <button>
            <img src={require('../images/assGym.png')} alt="" className="associateTypeImage"/>
        </button>
        </Link>
    </div>
</div>

 
  )
}
