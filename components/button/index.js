import styles from 'styles/Button.module.scss'

const Button = ({ txt }) => {
  return (
    <div className={styles.mainButtonContainer}>
      <button className={styles.mainButton}>
        <h4>{txt}</h4>
      </button>
    </div>
  )
}

export default Button
