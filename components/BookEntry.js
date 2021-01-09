import React from 'react'
import styles from './bookEntry.module.css';

export default function BookEntry({ data }) {
    console.log(data)
    return (
        <div className={styles.bookEntry}>
            <img className={styles.bookImg} src={data.volumeInfo.imageLinks.thumbnail} alt=""/>
            <div className="bookInfo">
                <h1 className={styles.bookTitle}>{data.volumeInfo.title}</h1>
            </div>
        </div>
    )
}
