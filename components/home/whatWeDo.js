import {
  faFilePdf,
  faFilePen,
  faPrint,
} from '@fortawesome/free-solid-svg-icons'
import StepsCard from 'components/steps/card'
import style from 'styles/StepsCard.module.scss'

const stepsCardTitles = [
  { title: 'Load previous pdf', icon: faFilePdf },
  { title: 'Make your edits', icon: faFilePen },
  { title: 'Send your version to print!', icon: faPrint },
]
const WhatWeDo = () => {
  return (
    <div>
      <h1>How does it work?</h1>
      <div className={style.stepsCardMainSection}>
        {stepsCardTitles.map((item) => {
          return (
            <StepsCard
              key={item.title}
              title={item.title}
              iconName={item.icon}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WhatWeDo
