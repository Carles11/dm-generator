import Link from 'next/link'

import styles from 'styles/404.module.scss'

const NotFoundPage = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here</p>

        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Homepage
          </Link>

          <Link href="/contact" className={styles.link}>
            Contact US
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
