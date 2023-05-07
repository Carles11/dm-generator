import ContactForm from 'components/contactForm'
import Layout from 'components/layout'
import styles from 'styles/Contact.module.scss'

export default function Contact() {
  return (
    <Layout>
      <div className={styles.contactContainer}>
        <h1>Contact us</h1>
        <ContactForm />
      </div>
    </Layout>
  )
}
