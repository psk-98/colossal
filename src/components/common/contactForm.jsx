"use client"
import styles from "@/styles/Contact.module.css"
import { usePathname } from "next/navigation"
import { useState } from "react"
import ServicesDropDown from "../ServicesDropDown/ServicesDropDown"

export default function ContactForm() {
  const pathname = usePathname()
  const [selectedService, setSelectedService] = useState(null)

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
      <form
        className={styles.contactForm}
        method="POST"
        data-netlify="true"
        name="contact"
      >
        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name*"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email*"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="number"
            id="number"
            name="number"
            required
            placeholder="Contact number*"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="service"
            name="service"
            required
            placeholder="Service*"
            hidden
            value={selectedService ? selectedService : ""}
            readOnly
          />
          <ServicesDropDown
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            id="message"
            name="message"
            required
            placeholder="What's on your mind?*"
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}
