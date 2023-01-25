import './ItemDetail.css'
import {useContext} from 'react';
import { GlobalContext } from './Context/CardContext';


const ItemDetail = ({ consolas }) => {

  const { count, setCount } = useContext(GlobalContext)

  const addProducts = () => {
    setCount(count + 1);
  };

  return (
    <div className='container-detail-card'>
      <div className='consola-detail-card'>
        <img className='dj-consolas' src={consolas.imgUrl} alt={`imagen del equipo ${consolas?.name}`} />
        <div className='text-card'>
          <p>
            {consolas?.precio}
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