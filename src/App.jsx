import { useState } from 'react';
import styles from './App.module.css';
import bgCafe from './assets/bg-cafe.jpg';
import starFill from './assets/Star_fill.svg';
import starEmpty from './assets/Star.svg';
import { useEffect } from 'react';

function App() {
  const [coffeeList, setCoffeeList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
      );
      const data = await res.json();
      setCoffeeList(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={bgCafe} alt="cafe" className={styles.image} />
      </header>
      <div className={styles.contents}>
        <h1>Our Collection</h1>
        <p className={styles.sub}>
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
        <ul className={styles.list}>
          {coffeeList.map((coffee) => (
            <li key={coffee.id}>
              <img src={coffee.image} alt={coffee.name} />
              <p>
                <span>{coffee.name}</span>
                <span>${coffee.price}</span>
              </p>
              {coffee.popular ? (
                <img src={starFill} />
              ) : (
                <img src={starEmpty} />
              )}
              {coffee.rating}
              <span>({coffee.votes} votes)</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
