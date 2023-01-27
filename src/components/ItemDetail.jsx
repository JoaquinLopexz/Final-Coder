import './ItemDetail.css'
import {useContext} from 'react';
import { GlobalContext } from './Context/CardContext';


const ItemDetail = () => {

  const { count, setCount, detail } = useContext(GlobalContext)

  const addProducts = () => {
    setCount(count + 1);
  };

  return (
    <div className='container-detail-card'>
      <div className='consola-detail-card'>
        <img className='dj-consolas' src={detail?.imgUrl} alt={`imagen del equipo ${detail?.name}`} />
        <div className='text-card'>
          <p>
            {detail?.precio}
          </p>
          <button onClick={() => addProducts()}>
            Comprar
          </button>

        </div>
      </div>


    </div>
  )
}

export default ItemDetail