import { createContext, useState } from "react";

const GlobalContext = createContext();
const { Provider } = GlobalContext;
const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  const [count, setCount] = useState(0);
  const [detail, setDetail] = useState({});
  const [productos, setProductos] = useState();

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const cartCopy = [...cart];
      cartCopy.forEach((element) => {
        if (element.item.id === item.id) {
          element.quantity = element.quantity + quantity;
        }
      });
      setCart(cartCopy);
    } else {
      setCart([
        ...cart,
        {
          item,
          quantity,
        },
      ]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (id) => {
    const cartCopy = [...cart].filter((element) => element.item.id === id);
    setCart(cartCopy);
  };

  const isInCart = (id) => {
    return cart.find((element) => element.item.id === id);
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((element) => {
      total = total + element.quantity * element.item.precio;
    });
    return total;
  };

  const getQuantity = () => {
    let quantity = 0;
    cart.forEach((element) => {
      quantity = quantity + element.quantity;
    });
    return quantity;
  };

  return (
    <Provider
      value={{
        productos,
        setProductos,
        addToCart,
        cart,
        setCart,
        count,
        setCount,
        detail,
        setDetail,
        getTotal,
        getQuantity,
        isInCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </Provider>
  );
};

export { CartProvider, GlobalContext };
