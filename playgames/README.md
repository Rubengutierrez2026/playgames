# PlayGames

PlayGames es un proyecto de e-commerce de videojuegos desarrollado como parte del curso de React de Coderhouse.

Actualmente incluye una barra de navegación, el nombre de la tienda y un componente visual de carrito de compras. El catálogo y la navegación por categorías se encuentran en desarrollo.

## Tecnologías utilizadas

- React
- JavaScript y JSX
- Vite
- Tailwind CSS 4
- HTML y CSS
- Git y GitHub

## Diseño y estilos

El proyecto utiliza Tailwind CSS para aplicar estilos mediante clases en los componentes: colores, tamaños, espaciado y distribución de los elementos.

Tailwind se integra con Vite mediante el plugin `@tailwindcss/vite`.

Las portadas se guardan en public/images/. Por ejemplo, la tarjeta de God of War carga su imagen desde /images/god-of-war.jpg.
## Carga Asíncrona del catálogo

Al abrir la tienda, primero aparece el mensaje de bienvenida. Aproximadamente dos segundos después se muestran los juegos. La demora simula la respuesta de una API usando datos locales:

1. Datos de prueba: en Products.jsx, la función getProducts() devuelve una Promise. Dentro de ella, setTimeout espera 2000 milisegundos y luego llama a resolve(products) para entregar el array de juegos.

2. Carga y estado: ItemListContainer inicia el estado items como un array vacío. Al montarse, usa useEffect con un array de dependencias vacío para ejecutar una función asíncrona. Esa función espera la respuesta con await getProducts() y guarda los juegos con setItems(resultado).

3. Listado: ItemList recibe los juegos por props y los recorre con .map(). Por cada juego crea un componente Item con key={product.id}, de modo que React identifica cada tarjeta por su ID.

4. Tarjeta: Item recibe un producto y presenta su información. La tarjeta no necesita pedir los datos ni gestionar el estado del catálogo.


## Instalación y ejecución

Para ejecutar el proyecto necesitás tener Node.js y npm instalados.

1. Descargá o cloná este repositorio.
2. Abrí una terminal en la carpeta que contiene `package.json`. En la estructura actual, la aplicación está dentro de la subcarpeta `playgames`.
3. Instalá las dependencias:

   ```bash
   npm install
   ```

4. Iniciá el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrí en el navegador la dirección que indique la terminal.

Para detener el servidor, presioná `Ctrl + C`.

## Estado del proyecto

El listado dinámico de productos está implementado con una API simulada. El carrito es visual y todavía no permite completar compras.

## Autor

Rubén Gutiérrez.
