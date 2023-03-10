import "./App.css";
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';
import Cards from "./components/Cards.jsx";
// import ClickCard from "./components/ClickCard.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Principiante from "./components/Principiantes";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./components/Context/CartContext";
import { db } from "./db/firebase-config";
import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import CartView from "./components/CartView/CartView";


function App() {
  const { setProductos, setDetail } = useContext(GlobalContext );

  const productCollectionRef = collection(db, "productos");

  const getProducts = async () => {
    const data = await getDocs(productCollectionRef);
    setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  

      const deleteProduct = async (id) => {
      const docRef = doc(db, "productos", id);
      await deleteDoc(docRef);
      const data = await getDocs(productCollectionRef);
      setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    const updateProduct = async (id) => {
      const docRef = doc(db, "productos", id);
      await updateDoc(docRef, {precio: 200000});
      const data = await getDocs(productCollectionRef);
      setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }; 

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/equipos" element={<Cards updateProduct={updateProduct} deleteProduct={deleteProduct} />} />
          <Route exact path="/comprar/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:category" element={<Principiante />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;