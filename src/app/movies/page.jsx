




import React from 'react'
import Link from 'next/link'
import MovieCard from '../components/MovieCard';
import styles from '../styles/comman.module.css'


async function page() {

  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const url = process.env.RAPID_KEY
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c0fcc85654msh9e4bed92a8ca1f1p11ab8fjsnbda8dec8ce6b',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options)
  const data = await res.json();
  // console.warn(data);
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1> Series & Movies</h1>
          <div className={styles.card_section}>
            {

              main_data.map((currElem) => {
                return <MovieCard key={currElem.id} {...currElem} />
              })

            }
          </div>

        </div>
      </section>
    </>
  )

}

export default page