import Link from "next/link"
import styles from "@/styles/Common.module.css"

export default function PageQuickLinks({ route }) {
  return (
    <div className={styles.pageLinksWrapper}>
      <Link href="/">{"Home > "}</Link>
      <Link className="colorText" href={"/" + route.route}>
        {route.text}
      </Link>
    </div>
  )
}
