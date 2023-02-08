import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'styles/StepsCard.module.scss'

const StepsCard = ({ title, iconName }) => {
  console.log({ iconName })
  return (
    <div className={styles.stepsCardContainer}>
      <h3>{title}</h3>
      <FontAwesomeIcon icon={iconName} />
    </div>
  )
}

export default StepsCard
