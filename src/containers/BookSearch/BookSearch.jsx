import SearchBar from "../../components/SearchBar";
import BookList from "../BookList/BookList";
import styles from "./BookSearch.module.scss"

const BookSearch = ({ books, setBooks, query, setQuery }) => {
  return (
    <section className={styles.BookSearch}>
      <div className={styles.BookSearch_Query}>Search Result for "{query}"</div>
      <div className={styles.BookSearch_SearchBar}><SearchBar setBooks={setBooks} query={query} setQuery={setQuery} /></div>
      <div className={styles.BookSearch_BookList}><BookList books={books} /></div>
    </section>
  );
};
export default BookSearch;
