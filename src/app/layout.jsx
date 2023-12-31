import { Poppins } from "next/font/google"
import "@/styles/globals.css"
import Nav from "@/components/nav/Nav"
import Footer from "@/components/footer/Footer"
import AnimatedPageWrapper from "@/components/AnimatedPageWrapper/AnimatedPageWrapper"

const poppins = Poppins({
  weight: ["400", "600", "500", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />
        <AnimatedPageWrapper>{children}</AnimatedPageWrapper>
        {/* <div className="container">{children}</div> */}
        <Footer />
      </body>
    </html>
  )
}
