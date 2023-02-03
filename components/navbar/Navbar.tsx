import Link from 'next/link'

import './Navbar.module.scss'

export default function Navbar() {
  return (
    <header>
      <div className="nav-header">
        <h1>Digital Media Generator</h1>
        <nav>
          <ul>
            <li>
              <Link href="/aboutUs">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/pdf-generator">Generate PDFs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
