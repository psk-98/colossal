import styles from "@/styles/Nav.module.css"
import { burger, logo } from "../../../public/svgs"
import Link from "next/link"
export default function Top({ setToggle, toggle }) {
  return (
    <nav className={styles.navTop}>
      <div className={styles.logo}>{logo}</div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About us</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/services">Services</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
            <button>Contact</button>
          </Link>
        </li>
      </ul>
      <div className={styles.burger} onClick={() => setToggle(!toggle)}>
        {burger}
      </div>
    </nav>
  )
}
