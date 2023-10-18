import styles from "@/styles/Contact.module.css"
import { services } from "@/utils/data"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const menuAnimations = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
}
const menuItemAnimations = {
  open: {
    scale: 1,
    transition: { duration: 0.15 },
  },
  close: { scale: 0, transition: { duration: 0.1 } },
}
export default function ServicesDropDown({
  selectedService,
  setSelectedService,
}) {
  const [isOpen, setOpen] = useState(true)

  return (
    <p className={styles.dropDown}>
      <button
        onClick={() => setOpen(!isOpen)}
        className={selectedService ? styles.active : undefined}
      >
        {selectedService ? selectedService : "Service v"}
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul
            className={styles.menu}
            variants={menuAnimations}
            initial="close"
            animate="open"
            exit="close"
          >
            {services.map((service, i) => (
              <motion.li
                className={styles.menuItem}
                variants={menuItemAnimations}
                key={"dropItem" + i}
                onClick={() => {
                  setSelectedService(service.header)
                  setOpen(false)
                }}
              >
                {service.header}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </p>
  )
}
