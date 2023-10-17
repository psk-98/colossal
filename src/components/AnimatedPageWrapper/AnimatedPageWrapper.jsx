"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function AnimatedPageWrapper({ children }) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.main
        className="container"
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}
