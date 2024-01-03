import styles from './App.module.css';
import bgCafe from './assets/bg-cafe.jpg';

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={bgCafe} alt="cafe" className={styles.image} />
      </header>
      <div className={styles.contents}>
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className={styles.tabs}>
          <input type="radio" id="all-products" name="filter-tab" checked />
          <label htmlFor="all-products">All Products</label>

          <input type="radio" id="available" name="filter-tab" />
          <label htmlFor="available">Available Now</label>
        </div>
      </div>
    </div>
  );
}

export default App;
