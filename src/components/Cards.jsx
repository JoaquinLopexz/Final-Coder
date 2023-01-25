/*   import Card from "./Card"; */
import { useContext, useEffect } from "react";
import { GlobalContext } from "./Context/CardContext";
import './Cards.css'
import { Link } from 'react-router-dom'
import './Cards.css';


function Cards(/* { getProduct } */) {

  const { productos } = useContext(GlobalContext);

  // const productsCollectionRef = collection(db, "productos")

  // const getProducts = async () => {
  //   const data = await getDocs(productsCollectionRef)
  //   setProductos(data.docs.map(consola => ({ ...consola.data(), id: consola.id })));
  // }

  

  // useEffect(() => {
  //   getProducts();
  // }, []);
  
  



  
  
  return (
    <div className="cards-container">
      {productos.map((equipo) => {

        return (
          <div key={equipo.id} className='containerCard'>
            <img className='dj-equipos' src={equipo.imgUrl} alt={`imagen del equipo ${equipo.name}`} />
            <div className='text-card'>
              <p>
                $ {equipo.precio} 
              </p>
              <Link to={`/comprar/${equipo.id}`}>
                <button /* onClick={() => getProduct(equipo.id)} */ id={equipo.id}>
                  Ver producto
                </button>
              </Link>

            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Cards;
