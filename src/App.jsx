import styles from './App.module.css';
import bgCafe from './assets/bg-cafe.jpg';

function App() {
  return (
    <header className={styles.header}>
      <img src={bgCafe} alt="cafe" className={styles.image} />
    </header>
  );
}

export default App;
