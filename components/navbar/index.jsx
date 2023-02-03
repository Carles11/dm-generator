import Link from 'next/link'

import styles from 'styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <header className={styles.navHeader}>
      <h1>Digital Media Generator</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/pdf-generator">Generate PDFs</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
