import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ setBooks, query, setQuery }) => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		searchBooks();
		navigate(`/GoogleBooksAPI/books`);
	};

	const handleChange = (el) => {
		setQuery(el.target.value);
	};

	const searchBooks = async () => {
		try {
			const response = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${query}`
			);
			const result = await response.json();
			setBooks(result.items);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={styles.SearchBar}
		>
			<input
				type='text'
				name='inputVal'
				id='inputVal'
				onChange={handleChange}
				className={styles.SearchBar_Input}
				required
			/>
			<input
				type='submit'
				value='Search'
				className={styles.SearchBar_Btn}
			/>
		</form>
	);
};
export default SearchBar;
