import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import {GlobalContext} from "./Context/CardContext";
import './Principiantes.css'

const Principiante = () => {
    const { category } =  useParams()
    const [consolas, setConsolas] = useState([])
    const {productos} = useContext(GlobalContext);
    
    // crear una función productoFiltrado
    // hacer filter de productos segun su category
    // retornar el filtrado.
    // getProductsByCategory
    
     
    const getProductsByCategory = () => {
        const productList = productos.filter(producto => producto.category === category)
        // VOMITA!!!
        return productList
    }

    useEffect(() => {
        setConsolas(getProductsByCategory())
    }, [category])

    
    return (
        <div className='containerConsolas'>  
            {
                consolas && consolas.map(consola => (
                    <div className='consolaCard' key={consola.id}>
                        <h3>{consola.name}</h3>
                        {/* <h5>{consola.category}</h5> */}
                        <img className='consolaImg' src={consola.imgUrl} alt={consola.name} /> 
                        <button>Comprar</button>
                    </div>
                ))
            }
        </div>
    
    )

}


export default Principiante

// const peopleType = "f"
// const peopleList = arrayList.filter(person => person.sex === peopleType)