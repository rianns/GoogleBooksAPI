import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import HomePage from './containers/HomePage/HomePage'
import { useState } from 'react'
import BookSearch from './containers/BookSearch'
import BookPage from './containers/BookPage/BookPage'

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage setBooks={setBooks} query={query} setQuery={setQuery} />} />
          <Route path='/books' element={<BookSearch books={books} setBooks={setBooks} query={query} setQuery={setQuery} />} />
          <Route path='/books/:id' element={<BookPage books={books} setBooks={setBooks} query={query} setQuery={setQuery} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
