import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import BookEntry from '../components/BookEntry';
import { useState } from 'react';

export default function Home() {
  const [searchAuthor, setSearchAuthor] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  const BOOK_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchTitle}+inauthor:${searchAuthor}&orderBy=relevance&key=AIzaSyB_-s2BfbodxkeNLMLomAGJJbaRWhwSd-k`;

  const handleTitleChange = (e) => {
    setSearchTitle(e.target.value);
  }

  const handleAuthorChange = (e) => {
    setSearchAuthor(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.get(BOOK_URL)
      .then(res => console.log(res.data.items));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>BestReads</title>
        <link rel="icon" href="/favicon.ico" />
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

      <BookEntry />
    </div>
  )
}
