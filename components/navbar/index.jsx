import logo from 'assets/icons/Corporativo_logo_transp.png'
import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <header className={styles.navHeader}>
      <Link href="/">
        <Image
          src={logo}
          //   fill
          width={100}
          height="auto"
          alt="corporativo logo"
        />
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
