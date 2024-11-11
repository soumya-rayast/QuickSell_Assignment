import React from 'react'
import '../styles/Navbar.css'
import Dropdown from './Dropdown'
const Navbar = ({ grouping, setGrouping, ordering, setOrdering }) => {
  return (
    <div className='nav'>
       <Dropdown grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
    </div>
  )
}

export default Navbar
