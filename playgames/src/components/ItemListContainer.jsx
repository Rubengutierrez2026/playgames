
import React, { useEffect, useState } from 'react'
import { getProducts } from "./Products"
import ItemList from './ItemList'


 function ItemListContainer({Greeting}) {

   const [items, setItems] = useState([]);

 useEffect(() => {
  async function cargarJuegos() {
    const resultado = await getProducts();
    setItems(resultado);
  }

  cargarJuegos();
}, []);
  return (
   <>
     <h1 className="rounded-xl bg-blue-600 p-6 text-3xl font-bold text-white text-center">{Greeting}</h1>
     <ItemList items={items} />
     
   </>
  )}
  export default ItemListContainer