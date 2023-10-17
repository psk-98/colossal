"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export const arrowAnimation = {
  hide: {
    display: "none",
    opacity: 0,
    y: -32,
  },
  show: {
    display: "block",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      y: {
        type: "easeOut",
      },
    },
  },
}

export default function CTAButton() {
  const [isHover, setHover] = useState(false)
  return (
    <button
      className={"btn"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {"Let's chat"}
      <span>
        <motion.svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          variants={arrowAnimation}
          initial={false}
          animate={isHover ? "show" : "hide"}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <title>ionicons-v5-a</title>
            <polyline
              points="112 268 256 412 400 268"
              style={{
                fill: "none",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 48,
              }}
            />
            <line
              x1={256}
              y1={392}
              x2={256}
              y2={100}
              style={{
                fill: "none",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 48,
              }}
            />
          </g>
        </motion.svg>
      </span>
    </button>
  )
}
