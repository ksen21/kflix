





import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

// import styles from "@/app/styles/common.module.css"

import styles from "../../styles/comman.module.css"
async function page({params}) {

    const id = params.id;



    
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c0fcc85654msh9e4bed92a8ca1f1p11ab8fjsnbda8dec8ce6b',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options)
  const data = await res.json();
  const main_data = data[0].details;





  return (
   <>
               <div className={styles.container}>
                <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                    </div>
                    <div>
                        <h1>{main_data.title}</h1>
                        <p>{main_data.synopsis}</p>
                    </div>
                </div>
            </div>
   </>
  )
}

export default page