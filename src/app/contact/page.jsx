import styles from "@/styles/Contact.module.css"
import PageQuickLinks from "@/components/common/pageQuickLinks"
import ContactForm from "@/components/common/contactForm"

export default function Contact() {
  return (
    <>
      <PageQuickLinks route={{ route: "contact", text: "Contact Us" }} />
      <div className={styles.contactHero}>
        <h1 className={styles.header + " colorText"}>
          Unlock your digital potential today!
        </h1>
        <p className={styles.text}>
          {
            "Whether you're a small start-up or an established enterprise, Colossal Group is here to propel your business forward in the digital sphere. Let's work together to create a digital marketing strategy that not only meets your expectations but exceeds them.Contact us today to get started on your journey to digital success."
          }
        </p>
      </div>
      <ContactForm />
    </>
  )
}
