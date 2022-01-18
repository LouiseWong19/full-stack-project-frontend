import React from 'react'
import { Icon } from '@iconify/react';
import "./NavBar.scss"

const NavBar = () => {

  return (
      <div className='navbar'>
        <Icon icon="bx:bx-search-alt" />
        <Icon icon="akar-icons:comment-add" />
      </div>
  )
}

export default NavBar
