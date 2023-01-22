import React from 'react'



const ItemDetail = ({consolas}) => {
    return (
    <div> 
        <div className='styles-consola'>
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