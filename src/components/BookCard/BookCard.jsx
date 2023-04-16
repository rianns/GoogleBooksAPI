import { NavLink } from "react-router-dom";
import styles from "./BookCard.module.scss"


const BookCard = ({ book, bookId }) => {
  const { imageLinks, authors, description, title } = book;

  const activeStyle = ({ isActive }) => 
  isActive ? `${styles.Active} ${styles.Book_Info}` : `${styles.Book_Info}`;

  return book && (
    <section className={styles.Book}>
      <NavLink to={`/books/${bookId}`} className={activeStyle}>      
        <img src={imageLinks?.thumbnail} alt={title} className={styles.Book_Img} />
        <div className={styles.Book_Info_Desc}>
          <h3>{title}</h3>
          <h4>By: {(authors) && authors.join(", ")}</h4>
          <p>{description}</p> 
        </div>
      </NavLink>
      <div className={styles.Book_Overlay}>
        <p>More info...</p>
      </div>
    </section>
  );
};
export default BookCard;
