import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import styles from "./HomePage.module.scss"


const HomePage = ({ setBooks, query, setQuery }) => {
  return (
    <div className={styles.HomePage}>
      <Header />
      <SearchBar setBooks={setBooks} query={query} setQuery={setQuery} />
    </div>
  );
};
export default HomePage;
