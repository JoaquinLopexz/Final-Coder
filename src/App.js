import "./App.css";
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer';
import Cards from "./components/Cards.js";
// import ClickCard from "./components/ClickCard.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Principiante from "./components/Principiantes";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CardContext } from "./components/Context/CardContext";
import { GlobalContext } from "./components/Context/CardContext";
import {useState,useContext} from 'react';



function App() { 
  
    const { productos } = useContext(GlobalContext);



  return (
    <div>
      <CardContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/equipos" element={<Cards/>} />
            <Route exact path="/comprar/:id" element={<ItemDetailContainer/>}/>
            <Route path="/categoria/:category" element={<Principiante />} />
            {/* <Route path="/comprar/:cardId" element={<ClickCard />} /> */}
          </Routes>
        </BrowserRouter>
      </CardContext>



    </div>
  );
}

export default App;