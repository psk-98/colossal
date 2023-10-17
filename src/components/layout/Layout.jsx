import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
})

export default function Layout() {
  return <div className={poppins.className}>{children}</div>
}
