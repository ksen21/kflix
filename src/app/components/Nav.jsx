




import Link from 'next/link'
import style from '../styles/navbar.module.css'

const Nav = () => {
    <nav className={styles.navbar}>
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

}

export default Nav;