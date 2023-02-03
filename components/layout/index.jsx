import Footer from 'components/footer'
import Navbar from 'components/navbar'
import styles from 'styles/Layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.layoutStyle}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
