import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div  >
      <ul className='flex justify-around'>
        <li><Link to="/login">login</Link> </li>
        <li><Link to="/about">about</Link></li>
       <li><Link to="/services">services</Link></li>
       <li><Link to="/">Categories</Link></li>
      </ul>
    </div>
  )
}
