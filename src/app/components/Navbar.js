


import React from 'react'
import Link from 'next/link'
import style from '../styles/navbar.module.css'
function Navbar() {
  return (
  <>
   <nav >
        <div >
            <ul className={style.navbarList}>
                <li className={style.navbarItem}>
                    <Link href="/" >
                        Home
                    </Link>

                </li>

                <li className={style.navbarItem}>
                    <Link href="/movies" >
                        Movies
                    </Link>

                </li>

                <li className={style.navbarItem}>
                    <Link href="/about" >
                        About
                    </Link>

                </li>
          
                <li className={style.navbarItem}>
                    <Link href="/contact" >
                        Contact
                    </Link>

                </li>

            </ul>

        </div>

    </nav>

  </>
  )
}

export default Navbar