import PageQuickLinks from "@/components/common/pageQuickLinks"
import { services } from "@/utils/data"
import styles from "@/styles/Services.module.css"
import Image from "next/image"
import ContactForm from "@/components/common/contactForm"

export default function Services() {
  return (
    <>
      <PageQuickLinks route={{ route: "services", text: "services" }} />
      <div className={styles.servicesWrapper}>
        {services.map((service, i) => (
          <div className={styles.descSection} key={i}>
            <div>
              <h2 className={styles.descHeader + " colorText"}>
                {service.header}
              </h2>
              <p className={styles.desc}>{service.desc}</p>
            </div>
            <div>
              <Image src={service.img} width={579} height={388} />
            </div>
          </div>
        ))}
      </div>
      <ContactForm />
    </>
  )
}
