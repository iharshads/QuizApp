import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className='header'>
        <Link to='/' className='title'>Quiz App</Link>

        <hr className='hr-tag' />
    </div>
  )
}

export default Header