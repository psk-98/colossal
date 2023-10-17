"use client"
import { useState } from "react"
import Sidebar from "./Sidebar"
import Top from "./Top"

export default function Nav() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Top setToggle={setToggle} toggle={toggle} />
      <Sidebar toggle={toggle} setToggle={setToggle} />
    </>
  )
}
