import React from 'react'
import './ItemDetail.css'


const ItemDetail = ({ consolas }) => {
  return (
    <div className='container-detail-card'>
      <div className='consola-detail-card'>
        <img className='dj-consolas' src={consolas?.imgUrl} alt={`imagen del equipo ${consolas?.name}`} />
        <div className='text-card'>
          <p>
            {consolas?.precio}
          </p>
          <button>
            Comprar
          </button>

        </div>
      </div>


    </div>
  )
}

export default ItemDetail