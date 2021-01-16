import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import BookEntry from '../components/BookEntry';
import { useState } from 'react';

export default function Home() {
  //States
  const [searchAuthor, setSearchAuthor] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //API links
  const BOOK_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchTitle}+inauthor:${searchAuthor}&orderBy=relevance&key=AIzaSyB_-s2BfbodxkeNLMLomAGJJbaRWhwSd-k`;

  //Changes states on change
  const handleTitleChange = (e) => {
    setSearchTitle(e.target.value);
  }

  const handleAuthorChange = (e) => {
    setSearchAuthor(e.target.value);
  }

  //Grabs the data on submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.get(BOOK_URL)
      .then(res => {

        setSearchResults(res.data.items);
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>BestReads</title>
        <link rel="icon" href="https://www.nicepng.com/png/full/17-173735_book-icon-green-book-icon-png.png" />
      </Head>
      <form onSubmit={() => handleFormSubmit(e)} className={styles.searchForm} action="">
        <div className={styles.query}>
          <h2 className={styles.label}>Title</h2>
          <input onChange={(e) => handleTitleChange(e)} type="text" name="Title" id="titleInput"/>
        </div>

        <div className={styles.query}>
          <h2 className={styles.label}>Author</h2>
          <input onChange={(e) => handleAuthorChange(e)} type="text" name="Author" id="authorInput"/>
        </div>
        <div className={styles.query}>
          <button onClick={(e) => handleFormSubmit(e)} className={styles.button} type="submit">Search</button>
        </div>
      </form>

      {/* Maps through search results  */}
      {searchResults.map(item => {
        return <BookEntry data={item} />
      })}
    </div>
  )
}
