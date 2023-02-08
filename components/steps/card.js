// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import styles from 'styles/StepsCard.module.scss'

const StepsCard = ({ title, iconName }) => {
  console.log({ iconName })
  return (
    <div className={styles.stepsCardContainer}>
      <h3>{title}</h3>
      {/* <FontAwesomeIcon icon={iconName} /> */}
      <Image
        src={iconName}
        //   fill
        width={100}
        height="auto"
        alt="corporativo logo"
      />
    </div>
  )
}

export default StepsCard
