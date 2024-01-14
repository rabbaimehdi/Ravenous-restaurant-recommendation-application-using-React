import BusinessList from '../BusinessList/BusinessList';
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <BusinessList />
    </div>
  );
}

export default App;
