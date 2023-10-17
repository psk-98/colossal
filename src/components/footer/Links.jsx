"use client"
import styles from "@/styles/Footer.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function QuickLinks() {
  const pathname = usePathname()
  return (
    <div className={styles.links}>
      <Link href="/" className={pathname === "/" && "colorText"}>
        Home
      </Link>
      <Link href="/about" className={pathname === "/about" && "colorText"}>
        why us
      </Link>{" "}
      <Link
        href="/services"
        className={pathname === "/services" && "colorText"}
      >
        services
      </Link>{" "}
      <Link href="/contact" className={pathname === "/contact" && "colorText"}>
        {"let's chat"}
      </Link>
    </div>
  )
}
