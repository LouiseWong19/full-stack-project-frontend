import React from 'react'
import { Icon } from '@iconify/react';
import "./NavBar.scss"
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
      <div className='navbar'>
        <Link to="/">
          <Icon icon="bx:bx-search-alt" className='navbar__item' />
        </Link>
        <Link to="/add-animal">
          <Icon icon="akar-icons:folder-add" className='navbar__item' />
        </Link>
        
      </div>
  )
}

export default NavBar
