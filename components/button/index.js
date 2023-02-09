import styles from 'styles/Button.module.scss'

const Button = ({ txt, card }) => {
  return (
    <div className={styles.mainButtonContainer}>
      <button className={!card ? styles.mainButton : styles.bodyButton}>
        <p>{txt}</p>
      </button>
    </div>
  )
}

export default Button
