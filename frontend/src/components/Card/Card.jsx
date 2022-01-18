import React from "react";
import "./Card.scss";

const Card = (props) => {
  const {animal, price, product} = props
  return (
    <div className="animal">
      <p>Name</p>
      <p>{animal}</p>
      <p>Price</p>
      <p>{price}</p>
      <p>Produce</p>
      <p>{product}</p>
    </div>
  )
}

export default Card
