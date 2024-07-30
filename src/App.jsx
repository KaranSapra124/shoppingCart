import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./Components/Products";
import { cartContext } from "./utils/cartContext";
import Cart from "./Components/Cart";

function App() {
  const [cartVal, setCartVal] = useState([]);
  return (
    <>
      <cartContext.Provider
        value={{ cartVal: cartVal, setCartVal: setCartVal }}
      >
        <Products />
        <Cart />
      </cartContext.Provider>
    </>
  );
}

export default App;
