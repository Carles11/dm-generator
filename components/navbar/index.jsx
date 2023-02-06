import Link from 'next/link'

import styles from 'styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <header className={styles.navHeader}>
      <Link href="/">
        <h4>Digital Media Generator</h4>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/pdf-generator">Generate PDFs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/auth">Log in / Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
