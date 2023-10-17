import styles from "@/styles/Nav.module.css"

export const checkActivePathname = (pathname, elementPath) => {
  return pathname === elementPath
    ? styles.sideItem + " " + styles.active
    : styles.sideItem
}
