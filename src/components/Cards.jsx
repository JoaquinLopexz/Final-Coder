/*   import Card from "./Card"; */
import { useContext, useEffect } from "react";
import { GlobalContext } from "./Context/CardContext";
import './Cards.css'
import { Link } from 'react-router-dom'
import './Cards.css';
import * as React from 'react';
import Button from '@mui/material/Button';

function Cards({ getProduct, deleteProduct, updateProduct }) {

  const { productos } = useContext(GlobalContext);

  return (
    <div className="cards-container">
      {productos.map((equipo) => {
        return (
          <div key={equipo.id} className='containerCard'>
            <img className='dj-equipos' src={equipo.imgUrl} alt={`imagen del equipo ${equipo.name}`} />
            <div className='text-card'>
              {/* <p>
                $ {equipo.precio} 
              </p> */}
              <Link to={`/comprar/${equipo.id}`}>
                <button onClick={() => getProduct(equipo.id)} id={equipo.id}>
                  Ver producto
                </button>
              </Link>

              <Button onClick={() => deleteProduct(equipo.id)} id={equipo.id} color="error" variant="contained" disableElevation>
                Eliminar
              </Button>

              <Button onClick={() => updateProduct(equipo.id)} id={equipo.id} color="error" variant="contained" disableElevation>
                Actualizar
              </Button>

            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Cards;
