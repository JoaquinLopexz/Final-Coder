import './ItemDetail.css'
import {useContext} from 'react';
import { GlobalContext } from './Context/CartContext';


const ItemDetail = ({producto}) => {

  const { count, setCount, detail, addToCart, setDetail } = useContext(GlobalContext)

  const addProducts = () => {
    setCount(count + 1);
  };


  return (
    <div className='container-detail-card'>
      <div className='consola-detail-card'>
        <img className='dj-consolas' src={producto?.imgUrl} alt={`imagen del equipo ${producto?.name}`} />
        <div className='text-card'>
          <p>
            {producto?.precio}
          </p>
          <button onClick={() => addToCart(producto,1)}>
            Comprar
          </button>

        </div>
      </div>


    </div>
  )
}

export default ItemDetail