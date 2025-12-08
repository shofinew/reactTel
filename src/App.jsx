import { useState } from "react"
import Placement from "./components/Placement"
import Product from "./components/Product"
import Topbar from "./components/Topbar"


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    // setCart(newCart => [...newCart, product]);
  }
 
  return (
    <div>
      <Topbar />
    <div>
      
      <Product addToCart={addToCart}></Product>
      <Placement cart={cart}></Placement>
      
    </div>
    </div>
  )
}

export default App
