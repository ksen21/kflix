




import React from 'react'

import style from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'
import Navbar from './Navbar'
function Header() {
  return (
    <>
    <header className={style.main_header}>

      <div className={style.navbar_brand}> 
          <Link href="/">
            <Image src="/Klogo.png" alt='Logo image' width={150} height={30}/>
          </Link>
      </div>
      <Navbar/>

    

    </header>
    </>
    
  )
}

export default Header