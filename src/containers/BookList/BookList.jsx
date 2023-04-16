import BookCard from "../../components/BookCard";
import styles from "./BookList.module.scss"

const BookList = ({ books }) => {

  return books && (
    <section className={styles.BookList}>
      {books.length === 0 ? (
        <p>Loading books...</p>
      ) : (
         books.map((book) => {
          return <BookCard key={book.id} book={book.volumeInfo} bookId={book.id} />
        })
      )}
    </section>
  );
};
export default BookList;
