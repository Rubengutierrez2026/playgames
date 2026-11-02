

 function Item({ product }) {
  return (
    <article className="rounded-xl bg-slate-900 p-4 text-white">
      <img
        src={product.img}
        alt={product.name}
        className="mb-3 h-48 w-full rounded-lg object-cover"
      />

      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="my-2 text-slate-300">{product.description}</p>
      <p className="font-bold">ARS {product.price.toLocaleString("es-AR")}</p>
    </article>
  );
}
export default Item