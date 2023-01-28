import {React, useContext, useEffect} from 'react'
import { GlobalContext } from '../Context/CartContext'
import CartItem from './CartItem'




function CartView() {
const { cart,removeFromCart,clearCart,getTotal} = useContext(GlobalContext);









  return cart.length > 0 ? (
    <div>
        {cart.map((element) => (
            <CartItem producto ={element.item}/>
        ))}


    </div>     
  ):(
    <div>
        El carrito esta vacio
    </div>
  )
}

export default CartView