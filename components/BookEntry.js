import React from 'react'
import styles from './bookEntry.module.css';

export default function BookEntry({ data }) {
    console.log(data)

    const handleStoreButtonClick = (link) => {
        window.open(link);
    }

    return (
        <div className={styles.bookEntry}>
            {data.volumeInfo.imageLinks.thumbnail ? <img className={styles.bookImg} src={data.volumeInfo.imageLinks.thumbnail} alt=""/> : <></>}
            <div className={styles.bookInfo}>
                {data.volumeInfo.title ? <h1>{data.volumeInfo.title}</h1> : <></>}
                {data.volumeInfo.subtitle ? <h2>{data.volumeInfo.subtitle}</h2> : <></>}
                {data.volumeInfo.pageCount ? <p className={styles.bookLength}>{data.volumeInfo.pageCount} pages</p> : <></>}
                {data.volumeInfo.description ? <p className={styles.bookDesc}>{data.volumeInfo.description}</p> : <></>}
                {data.volumeInfo.canonicalVolumeLink ? <button className={styles.storeButton} onClick={() => handleStoreButtonClick(data.volumeInfo.canonicalVolumeLink)}>Google Books Page</button> : <></>}
            </div>
        </div>
    )
}
