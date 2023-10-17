import styles from "@/styles/Contact.module.css"
import { services } from "@/utils/data"
import { useState } from "react"

export default function ServicesDropDown() {
  const [isOpen, setOpen] = useState(true)
  const [selected, setSelected] = useState(null)

  return (
    <div className={styles.dropDown}>
      <button
        onClick={() => setOpen(!isOpen)}
        // className={selected ? styles.active : undefined}
      >
        {selected ? selected : "Service v"}
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {services.map((service, i) => (
            <li
              className={styles.menuItem}
              key={"dropItem" + i}
              onClick={() => {
                setSelected(service.header)
                setOpen(false)
              }}
            >
              {service.header}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
