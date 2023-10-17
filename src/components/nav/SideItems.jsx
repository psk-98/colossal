import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { sideItemsAnimation } from "./Sidebar"
import Link from "next/link"
import { pageNavigationDetails } from "@/utils/data"
import { checkActivePathname } from "@/utils/helpers"

export default function SideItems({ setToggle }) {
  const pathname = usePathname()

  return pageNavigationDetails.map((page, i) => {
    return pageNavigationDetails.length - 1 === i ? (
      <motion.div
        className={checkActivePathname(pathname, page.link)}
        key={i}
        variants={sideItemsAnimation}
        onClick={() => setToggle(false)}
      >
        <Link href={page.link}>
          <button>
            <span> {page.name}</span>
          </button>
        </Link>
      </motion.div>
    ) : (
      <motion.div
        className={checkActivePathname(pathname, page.link)}
        key={i}
        variants={sideItemsAnimation}
        onClick={() => setToggle(false)}
      >
        <Link href={page.link}>{page.name}</Link>
      </motion.div>
    )
  })
}
