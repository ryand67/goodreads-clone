import React from 'react'
import styles from './bookEntry.module.css';

export default function BookEntry({ data }) {
    console.log(data)
    return (
        <div className={styles.bookEntry}>
            <img className={styles.bookImg} src={data.volumeInfo.imageLinks.thumbnail} alt=""/>
            <div className={styles.bookInfo}>
                <h1 >{data.volumeInfo.title}</h1>
                {data.volumeInfo.subtitle ? <h2>{data.volumeInfo.subtitle}</h2> : <></>}
                {data.volumeInfo.pageCount ? <p className={styles.bookLength}>{data.volumeInfo.pageCount} pages</p> : <></>}
                <p className={styles.bookDesc}>{data.volumeInfo.description}</p>
            </div>
        </div>
    )
}
