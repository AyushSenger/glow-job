import styles from "./ProductGrid.module.css";

const products = [
  {
    id: 1,
    name: "Açaí Kiss Lip Oil - After Dark",
    category: "LIP OIL",
    price: "₹699.00",
    image: "/images/product-1.png",
    tag: "BESTSELLER"
  },
  {
    id: 2,
    name: "Açaí Kiss Lip Oil - Champagne Stain",
    category: "LIP OIL",
    price: "₹699.00",
    image: "/images/product-2.png",
    tag: "NEW"
  },
  {
    id: 3,
    name: "Hydra Plump Butter Balm - Raspberry",
    category: "BUTTER BALM",
    price: "₹799.00",
    image: "/images/product-2.png" // Reusing due to quota
  },
  {
    id: 4,
    name: "Açaí Kiss Lip Oil - Drunk On You",
    category: "LIP OIL",
    price: "₹699.00",
    image: "/images/product-1.png" // Reusing due to quota
  },
  {
    id: 5,
    name: "Hydra Plump Butter Balm - Rose",
    category: "BUTTER BALM",
    price: "₹799.00",
    image: "/images/product-2.png" // Reusing due to quota
  },
  {
    id: 6,
    name: "Build Your Trio Capsule",
    category: "BUNDLES",
    price: "₹1799.00",
    image: "/images/hero-3.png",
    tag: "SAVE 20%"
  }
];

export default function ProductGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>The Lip Shop</h2>
          <p className={styles.subtitle}>Curated for the ultimate high-shine glow.</p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={product.image} alt={product.name} className={styles.image} />
                {product.tag && <span className={styles.tag}>{product.tag}</span>}
                <div className={styles.overlay}>
                  <button className={styles.buyBtn}>QUICK ADD</button>
                </div>
              </div>
              <div className={styles.details}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
