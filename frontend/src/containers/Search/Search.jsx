import React from 'react'
import { useState, useEffect } from "react";
import Card from '../../components/Card/Card'
import NavBar from '../../components/NavBar/NavBar'
import "./Search.scss"

const Search = () => {
  // const {information} = props
  const [animals, setAnimals] = useState([])
  const cardList = animals.map(animal =>{
    return <Card animal={animal.animal} price={animal.price} product={animal.produce} />
  })
  const getAnimals = () =>{
    fetch("http://localhost:8888/animals")
    .then(response => response.json())
    .then(json => setAnimals(json))
    .catch (error => console.log(error))
  }

  useEffect(() => {
    getAnimals();
  }, []);
  console.log(animals)

  return (
    <div className='search'>
      <nav className='search-navbar'>
        <h1>Stardew Valley</h1>
        <p>Animals Wiki</p>
        {/* insert search box here */}
      </nav>
      <section className='search-container'>
        {cardList}
        {/* <Card /> */}
      </section>
      <NavBar />
    </div>
  )
}

export default Search
