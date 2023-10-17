"use client"
import styles from "@/styles/Footer.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function QuickLinks() {
  const pathname = usePathname()
  return (
    <div className={styles.links}>
      <Link href="/" className={pathname === "/" ? "colorText" : undefined}>
        Home
      </Link>
      <Link
        href="/about"
        className={pathname === "/about" ? "colorText" : undefined}
      >
        why us
      </Link>{" "}
      <Link
        href="/services"
        className={pathname === "/services" ? "colorText" : undefined}
      >
        services
      </Link>{" "}
      <Link
        href="/contact"
        className={pathname === "/contact" ? "colorText" : undefined}
      >
        {"let's chat"}
      </Link>
    </div>
  )
}
