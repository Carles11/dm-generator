import Link from 'next/link'
import styles from 'styles/Button.module.scss'

const Button = ({ txt, card, link }) => {
  return (
    <div className={styles.mainButtonContainer}>
      <Link
        href={link}
        className={!card ? styles.mainButton : styles.bodyButton}
      >
        <p>{txt}</p>
      </Link>
    </div>
  )
}

export default Button
