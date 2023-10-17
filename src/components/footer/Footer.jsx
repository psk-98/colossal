import styles from "@/styles/Footer.module.css"
import Link from "next/link"
import QuickLinks from "./Links"
import {
  facebookLogo,
  instagramLogo,
  linkedinLogo,
  logo,
  twitterLogo,
} from "../../../public/svgs"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.upperFooter}>
        <div className={styles.logo}>{logo}</div>
        <QuickLinks />
        <div className={styles.contacts}>
          <span>unlock your digital potential today!</span>
          <span>email</span>
        </div>
        <div className={styles.socialLinks}>
          <div>
            <Link href="#">{facebookLogo}</Link>
            <Link href="#">{linkedinLogo}</Link>
          </div>
          <div>
            <Link href="#">{twitterLogo}</Link>
            <Link href="#">{instagramLogo}</Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>&copy;Colossal Group 2023</div>
    </footer>
  )
}
