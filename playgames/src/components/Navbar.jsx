import React from 'react'
import CartWidget from './CartWidget'
 function Navbar() {
  return (
    <div>
     <nav className='flex-row-reverse'>

      <div >
      <h2>PlayGames</h2>
        <a  href="Inicio">Inicio</a>
        <a  href="Ofertas">Ofertas</a>
        <a  href="Lanzamientos">Proximos lanzamientos</a>
        <a  href="Esplorar">Explorar</a>
        <a  href="Soporte">Soporte</a>
        <CartWidget/>
      </div>





     </nav>
    </div>
  )
}
export default Navbar