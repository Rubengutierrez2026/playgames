import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}