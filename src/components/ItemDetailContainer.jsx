import React, {useContext, useState,/*  useEffect */} from 'react'
import { GlobalContext } from './Context/CardContext'
/* import { useParams}  from 'react-router-dom' */
import ItemDetail  from './ItemDetail'

export const ItemDetailContainer = () => {
    const [consolas, setConsolas]= useState({});
    const {productos} = useContext(GlobalContext)
    /* const { id } = useParams(); */


   /*  const getConsolaById = (productId) => {
        const consoleObtained = productos.find(producto => producto.id === Number(productId))   
        setConsolas(consoleObtained) 
    }
     */
   /*  useEffect(() => { 
        if (id){
            getConsolaById(id)
        }
    
    },[id]) */

    return (
    <>
        <ItemDetail />
    </>
  )
}

