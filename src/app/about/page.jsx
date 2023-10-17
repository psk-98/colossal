import PageQuickLinks from "@/components/common/pageQuickLinks"
import styles from "@/styles/About.module.css"
import { whyUs } from "@/utils/data"
import {
  googleAdsLogo,
  googleAnalyticsLogo,
  nextjsLogo,
  reactLogo,
  wordPressLogo,
} from "../../../public/logoSvgs"
import ContactForm from "@/components/common/contactForm"
import Image from "next/image"
import CTAButton from "@/components/CTAButton/Button"

export default function About() {
  return (
    <>
      <div className={styles.aboutHero + " darkSection"}>
        <div>
          <PageQuickLinks route={{ route: "about", text: "Why Us" }} />
          <h1 className={styles.header}>
            Our mission is simple: To deliver innovative, tailor-made solutions
            that align perfectly with your business goals.
          </h1>
          <p className={styles.aboutText}>
            Colossal Group is a leading digital marketing agency with a passion
            for helping businesses thrive in the digital landscape. With a team
            of highly skilled and creative professionals, we pride ourselves on
            staying ahead of the curve when it comes to the latest industry
            trends and strategies.
          </p>
          <a href="#contactForm" className={styles.aboutCTA}>
            <CTAButton />
          </a>
        </div>
        <div>
          <Image src={"/aboutHero.png"} width={705} height={673} />
        </div>
      </div>
      <div className={styles.descriptions}>
        <h1 className={styles.header}>Why us?</h1>
        <div className={styles.descCards}>
          {whyUs.map((desc, i) => (
            <div className={styles.descCard} key={i}>
              <h2 className={styles.descHeader}>{desc.header}</h2>
              <p className={styles.desc}>{desc.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.technologies + " darkSection"}>
        <h1 className={styles.header}>Our Technologies and Collaborators</h1>
        <div className={styles.logosDisplay}>
          <div className={styles.logo}>{nextjsLogo}</div>
          <div className={styles.logo}>{googleAnalyticsLogo}</div>
          <div className={styles.logo}>{reactLogo}</div>
          <div className={styles.logo}>{wordPressLogo}</div>
          <div className={styles.logo}>{googleAdsLogo}</div>
        </div>
        <div className={styles.techNav}>
          <div className={styles.navSelectors}>
            <div className={styles.selector}></div>
            <div className={styles.selector + " " + styles.active}></div>
            <div className={styles.selector}></div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  )
}
