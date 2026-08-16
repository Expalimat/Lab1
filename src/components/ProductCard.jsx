import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const cardClass = product.inStock
    ? styles.card
    : `${styles.card} ${styles.outOfStock}`;

  return (
    <div className={cardClass}>
      <h3>{product.name}</h3>
      <p className={styles.price}>₱{product.price.toLocaleString()}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
}
