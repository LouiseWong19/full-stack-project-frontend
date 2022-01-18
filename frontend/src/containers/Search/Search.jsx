import React from 'react'
import Card from '../../components/Card/Card'
import "./Search.scss"

const Search = (props) => {
  return (
    <div className='search'>
      <nav className='search-navbar'>
        <h1>Stardew Valley</h1>
        <p>Animals Wiki</p>
        {/* insert search box here */}
      </nav>
      <section className='search-container'>
        <Card />
      </section>
    </div>
  )
}

export default Search
