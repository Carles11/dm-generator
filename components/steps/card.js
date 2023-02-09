// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'components/button'
import Image from 'next/image'

import styles from 'styles/StepsCard.module.scss'

const StepsCard = ({ title, iconName, descriptions, btnText }) => {
  console.log({ iconName })
  return (
    <div className={styles.stepsCardContainer}>
      <h3>{title}</h3>
      {descriptions &&
        descriptions.map((item) => {
          return <p>{item}</p>
        })}
      {/* <FontAwesomeIcon icon={iconName} /> */}
      {iconName && (
        <Image
          src={iconName}
          //   fill
          width={100}
          height="auto"
          alt="corporativo logo"
        />
      )}

      {btnText && <Button card txt={btnText} />}
    </div>
  )
}

export default StepsCard
