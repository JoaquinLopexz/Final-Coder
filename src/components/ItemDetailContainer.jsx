import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "./Context/CartContext";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../db/firebase-config";
import {
  doc,
  getDoc,

} from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
  }, []);

  const getProduct = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      setProducto(({id: docSnap.id,...docSnap.data()}));
    } else {
      console.log("No se Encontraron los documentos");
    }
  };

  return (
    <>
      <ItemDetail producto={producto}/>
    </>
  );
};
