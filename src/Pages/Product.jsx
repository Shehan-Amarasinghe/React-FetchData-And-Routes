import React, { useEffect, useState } from 'react'

function Product() {

  const [carts, setCarts] = useState([]);

  const fetchCat = async() => {
    try {
      const responsee = await fetch("https://fakestoreapi.com/carts")
      const resultt = await responsee.json();
      setCarts(resultt);

    } catch (error) {
      console.log(error);
    }
   
  }

  useEffect(() => {
    fetchCat();
  },[])

  return ( 
    <div>
    <h1>Product</h1>
    {carts.map((cart) => {
      return(
          <ul key={Math.random()}>
            <li>{cart.id}</li>
            <br />
            <h4>{cart.date}</h4>
          </ul>
      )})}
   </div>
  )
}

export default Product