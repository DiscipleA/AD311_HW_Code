import { products as defaultProducts } from "./data/products";
import "./ProductList.css";

function ProductList({ products = defaultProducts }) {
  if (!products || products.length === 0) {
    return (
      <section className="product-list-container">
        <h2 className="product-list-title">Product List</h2>
        <p>No products available.</p>
      </section>
    );
  }

  return (
    <section className="product-list-container">
      <h2 className="product-list-title">Product List</h2>

      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <h3 className="product-name">{product.name || "Unnamed Product"}</h3>
            <p className="product-description">
              {product.description || "No description available."}
            </p>
            <p className="product-price">
              {typeof product.price === "number" ? `$${product.price}` : "Price unavailable"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductList;