import styles from 'styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <ul>
          <li>FooterLeft</li>
          <li>FooterLeft</li>
          <li>FooterLeft</li>
          <li>FooterLeft</li>
        </ul>
        <ul>
          <li>FooterRight</li>
          <li>FooterRight</li>
          <li>FooterRight</li>
          <li>FooterRight</li>
        </ul>
      </div>
    </footer>
  )
}
