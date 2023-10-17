import ContactForm from "@/components/common/contactForm"
import styles from "../styles/Home.module.css"
import { largerScreenIllustration } from "../../public/svgs"
import CTAButton from "@/components/CTAButton/Button"

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.accentText + " colorText"}>
            Welcome to Colossal Group
          </div>
          <div className={styles.headerText}>
            Your Trusted Digital Marketing Agency in South Africa
          </div>
          <div className={styles.heroText}>
            Are you looking to take your online presence to new heights and
            leave a lasting impact on your target audience? Look no further! At
            Colossal Group, we are committed to providing top-notch digital
            marketing solutions that will elevate your brand, boost your online
            visibility, and drive tangible results.
          </div>
          <a href="#contactForm" className={styles.heroCTA}>
            <CTAButton />
          </a>
        </div>
        <div className={styles.heroRight}>{largerScreenIllustration}</div>
      </div>
      <ContactForm />
    </>
  )
}
