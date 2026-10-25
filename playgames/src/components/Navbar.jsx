import React from 'react'
import CartWidget from './CartWidget'
 function Navbar() {
  return (
    <>
     <nav className="grid grid-cols-1 items-center gap-4  bg-[#020618] px-6 py-4 text-white  lg:grid-cols-[1fr_auto_1fr]">
       
       {/* Logo PlayGames */}
      <a href="/" className='text-2xl font-extrabold tracking-wide'>PLAY
      <span className='text-blue-500' >GAMES</span>
      </a>
      
      {/* Enlacs Nav */}
      <div className='flex flex-wrap justify-center gap-6' >
        <a  href="Accion">🎮 Accion</a>
        <a  href="Aventura">🗡️ Aventura</a>
        <a  href="Rpg">🛡️ Rpg</a>
        <a  href="Multijugador">👥 Multijugador</a>
        <a  href="Carreras">🏎️ Carreras</a>
         <a  href="Deportes">⚽ Deportes</a>
         
      </div>

      {/* Carrito */}
      <div className='justify-self-end'>
        <CartWidget/>
      </div>

     </nav>
    </>
    
  )
}
export default Navbar