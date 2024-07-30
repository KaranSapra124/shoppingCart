import React, { useContext } from "react";
import { cartContext } from "../utils/cartContext";

const Cart = () => {
  const cartData = useContext(cartContext);
  const { cartVal } = cartData;
  return (
    <>
      {cartVal.length !== 0 &&
        cartVal?.map((elem) => {
          return (
            <div>
              <h1>{elem.title}</h1>
            </div>
          );
        })}
    </>
  );
};

export default Cart;
