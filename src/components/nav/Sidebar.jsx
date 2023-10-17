import styles from "@/styles/Nav.module.css"
import { motion } from "framer-motion"
import SideItems from "./SideItems"

const wrapperAnimation = {
  open: {
    height: "fit-content",
    width: "fit-content",
    transition: {
      when: "beforeChildren",
    },
  },
  initial: {
    height: 0,
    width: 0,
    transition: {
      when: "afterChildren",
    },
  },
  closed: {
    height: 0,
    width: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const mainNavAnimation = {
  open: {
    scaleX: 1,
    scaleY: 1,
    transition: {
      type: "easeOut",
      staggerChildren: 0.2,
      delayChildren: 0.2,
      duration: 0.5,
      scaleX: {
        delay: 0.2,
        duration: 0.3,
      },
    },
  },
  closed: {
    scaleX: 0,
    scaleY: 0,
    transition: {
      type: "easeIn",
      staggerChildren: 0.15,
      staggerDirection: -1,
      when: "afterChildren",
      scaleY: {
        delay: 0.07,
      },
    },
  },
}

export const sideItemsAnimation = {
  open: {
    // opacity: 1,
    scale: 1,
    transition: {
      type: "easeOut",
    },
  },

  closed: {
    // opacity: 0,
    scale: 0,
    transition: {
      type: "easeIn",
    },
  },
}

export default function Sidebar({ toggle, setToggle }) {
  return (
    <motion.div
      className={styles.mainWrapper}
      variants={wrapperAnimation}
      initial={false}
      animate={toggle ? "open" : "closed"}
    >
      <motion.aside className={styles.sideBar} variants={mainNavAnimation}>
        <SideItems setToggle={setToggle} />
      </motion.aside>
    </motion.div>
  )
}
