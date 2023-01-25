import { createContext, useState } from 'react';
/* import { equipos } from '../data.js'; */

const GlobalContext = createContext();
const CardContext = (props) => {
  const [productos, setProductos] = useState([]);
  const [count, setCount] = useState(0);


  /* todo lo que queres que sea global */

 /*  useEffect(() => {
    setProductos([...equipos])
  }, []); */

  return (
    <div>
      <GlobalContext.Provider value={{ productos, setProductos, count, setCount }}>
        {props.children}
      </GlobalContext.Provider>
    </div>
  )
}

export { CardContext, GlobalContext };
