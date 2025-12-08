import React, { useEffect, useState } from 'react'
import Produc from './Produc';

const Product = ({ addToCart }) => {
       const [products, setProducts] = useState([]);

  useEffect(()=>{
      fetch('data.json')
      .then(res => res.json())
      .then(products => setProducts(products));
      
    }, [])
  return (
    <div className='border m-2 p-2 grid-cols-4  gap-4 md:grid'>
      {
        products.map(product => 
        <Produc 
        key={product.id} 
        product={product}
        addToCart={addToCart}>
          
        </Produc>)
      }
    </div>
  );
};

export default Product