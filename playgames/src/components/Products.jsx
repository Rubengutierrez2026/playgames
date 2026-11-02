import React from 'react'

// Arrays de juegos
export const products =[
    {
      id:1,
      name: "God of war Ragnarök",
      description:"Acompañá a Kratos y Atreus en una aventura por los nueve reinos",
      price:45999,
      category:"Acción",
      img:"/images/god-of-war.jpg",
      stock:10,
    },
    {
      id:2,
      name:"Marvel's Spider-Man 2",
      description: "Recorré Nueva York con Peter Parker y Miles Morales.",
      price:55999,
      category:"Aventura",
      img:"/images/spider-man-2.jpg",
      stock:10,
    },
    {
      id:3,
      name:"Gran Turismo 7",
      description: "Elegí tu auto y competí en circuitos de todo el mundo.",
      price:49999,
      category:"Carreras",
      img:"/images/gran-turismo-7.jpg",
      stock:10,
    },
    {
      id:4,
      name:"EA Sports FC 25",
      description:"Dirigí tu club y disputá partidos con tu equipo favorito.",
      price:60000,
      category:"Deportes",
      img:"/images/ea-sports-fc-25.jpg",
      stock:10,
    },
    {
      id:5,
      name:"Minecraft",
      description:"Explorá, construí y sobreviví en un mundo de bloques.",
      price:29999,
      category:"Rpg",
      img: "/images/minecraft.jpg",
      stock:10,
    },
  ]
  
  export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}


