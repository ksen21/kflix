



import React from 'react'


import styles from '../styles/comman.module.css'
import Image from 'next/image';
import Link from 'next/link';
function MovieCard(currElem) {

    const {id,title, type, synopsis} = currElem.jawSummary;
 
  return (
    <div className={styles.card}>
        <div className={styles.card_image}>
            <Image src={currElem.jawSummary.backgroundImage.url} alt={title} width={250} height={200}/>

        </div>

        <div className={styles.card_data}>
            <h2>{title.substring(0,18)}</h2>
            <p>
                {`${synopsis.substring(0,60)}...`}
            </p>

        </div>
        <Link href={`/movies/${id}`}>   
        <button>Read More</button>
        </Link>

    </div>
  )
}

export default MovieCard