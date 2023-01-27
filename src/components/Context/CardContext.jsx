import { createContext, useState } from 'react';
/* import { equipos } from '../data.js'; */

const GlobalContext = createContext();
const CardContext = (props) => {
  const [productos, setProductos] = useState([]);
  const [count, setCount] = useState(0);

  const [detail, setDetail] = useState({});
  


  /* todo lo que queres que sea global */

 /*  useEffect(() => {
    setProductos([...equipos])
  }, []); */

  return (
    <div>
      <GlobalContext.Provider value={{ productos, setProductos, count, setCount, detail, setDetail }}>
        {props.children}
      </GlobalContext.Provider>
    </div>
  )
}

export { CardContext, GlobalContext };
