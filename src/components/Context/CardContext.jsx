import { createContext, useState, useEffect } from 'react';
import { equipos } from '../data.js';

const GlobalContext = createContext();
const CardContext = (props) => {
  const [productos, setProductos] = useState([]);

  /* todo lo que queres que sea global */

  useEffect(() => {
    setProductos([...equipos])
  }, []);

  return (
    <div>
      <GlobalContext.Provider value={{ productos, setProductos }}>
        {props.children}
      </GlobalContext.Provider>
    </div>
  )
}

export { CardContext, GlobalContext };
