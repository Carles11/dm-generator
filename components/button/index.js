import styles from 'styles/Button.module.scss'

const Button = ({ txt }) => {
  return (
    <div className={styles.mainButtonContainer}>
      <button className={styles.mainButton}>
        <p>{txt}</p>
      </button>
    </div>
  )
}

export default Button
