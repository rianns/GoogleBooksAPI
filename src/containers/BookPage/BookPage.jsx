import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./BookPage.module.scss";
import SearchBar from "../../components/SearchBar";

const BookPage = ({ books, setBooks, query, setQuery }) => {
	const [findBook, setFindBook] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const findBookRes = books.find((book) => book.id === id);
		setFindBook(findBookRes);
	}, [id, books]);

	if (findBook) {
		const { volumeInfo } = findBook;

		const isbn10 =
			volumeInfo &&
			(volumeInfo?.industryIdentifiers).filter(
				(item) => item["type"] === "ISBN_10"
			)[0].identifier;

		const isbn13 =
			volumeInfo &&
			(volumeInfo?.industryIdentifiers).filter(
				(item) => item["type"] === "ISBN_13"
			)[0].identifier;

		return (
			books && (
				<>
					<section className={styles.BookPage}>
						<img
							src={volumeInfo?.imageLinks?.thumbnail}
							alt={volumeInfo?.title}
							className={styles.BookPage_Img}
						/>
						<div className={styles.BookPage_Info}>
							<h2>{volumeInfo?.title}</h2>
							<h4>By: {volumeInfo?.authors.join(", ")}</h4>
							<a
								href={volumeInfo?.previewLink}
								target='_blank'
							>
								Read Sample
							</a>
							<p className={styles.BookPage_Info_Desc}>
								Description:{" "}
							</p>
							<p>{volumeInfo?.description}</p>
						</div>
					</section>
					<section className={styles.ExtraInfo}>
						<h3>More information: </h3>
						<p>
							Ratings:{" "}
							{volumeInfo?.ratingsCount ?? "No information"}
						</p>
						<p>
							Subtitles:{" "}
							{volumeInfo?.subtitle ?? "No information"}
						</p>
						<p>
							Published date:{" "}
							{volumeInfo?.publishedDate ?? "No information"}
						</p>
						<p>
							Publisher:{" "}
							{volumeInfo?.publisher ?? "No information"}
						</p>
						<p>Genre: {volumeInfo?.category ?? "No information"}</p>
						<p>
							Languages:{" "}
							{volumeInfo?.language
								? (volumeInfo?.language).toUpperCase()
								: "No information"}
						</p>
						<p>ISBN-10: {isbn10 ?? "No information"}</p>
						<p>ISBN-13: {isbn13 ?? "No information"}</p>
					</section>
				</>
			)
		);
	} else {
		return (
			<div className={styles.NoBook}>
				<p>No book found...</p>
				<SearchBar
					setBooks={setBooks}
					query={query}
					setQuery={setQuery}
				/>
			</div>
		);
	}
};
export default BookPage;
