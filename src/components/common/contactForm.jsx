"use client"
import styles from "@/styles/Contact.module.css"
import { usePathname } from "next/navigation"

export default function ContactForm() {
  const pathname = usePathname()

  return (
    <>
      {console.log(pathname)}
      {pathname !== "/contact" && (
        <div className={styles.formTextWrapper}>
          <h1 className={styles.formHeader + " colorText"} id="contactForm">
            {"let's chat"}
          </h1>
          <p className={styles.formText}>
            Contact us today to get started on your journey to digital success.
          </p>
        </div>
      )}
      <form className={styles.contactForm}>
        <p className={styles.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name*"
          />
        </p>
        <p className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email*"
          />
        </p>
        <p className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Contact number*"
          />
        </p>
        <p className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Service*"
          />
        </p>
        <p className={styles.formGroup}>
          <textarea
            id="message"
            name="message"
            required
            placeholder="What's on your mind?*"
          ></textarea>
        </p>
        <p className={styles.formGroup}>
          <button className="btn">Submit</button>
        </p>
      </form>
    </>
  )
}
