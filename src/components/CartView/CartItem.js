import React from "react";
import "./CartItem.css";


const CartItem = ({ producto }) => {
  return (
    <div className="card">
     <img src={producto.imgUrl} alt='imgen de producto' />
      {producto.name}
      <b>Precio:</b> {producto.precio}
      <b>
        Cantidad:
      </b>
    </div>
  );
};

export default CartItem;
