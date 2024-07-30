import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../utils/cartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const cartData = useContext(cartContext);
  const { cartVal, setCartVal } = cartData;
  const handleAddCart = (item) => {
    setCartVal((prevCart) => [...prevCart, item]);
  };
  useEffect(() => {
    const fetchProducts = async (url) => {
      const data = await fetch(url);
      const productsData = await data.json();
      setProducts(productsData.products);
    };

    fetchProducts("https://dummyjson.com/products");
  }, []);

  return (
    <div>
      {products?.map((elem) => {
        return (
          <div>
            <h1>{elem.title}</h1>
            <img src={elem?.thumbnail} alt="" />
            <p>{elem.price}</p>
            <button
              onClick={() => {
                handleAddCart(elem);
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
