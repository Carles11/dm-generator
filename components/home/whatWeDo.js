// import {
//   faFilePdf,
//   faFilePen,
//   faPrint,
// } from '@fortawesome/free-solid-svg-icons'
import RoundPDF from 'assets/icons/pdf_round.png'
import RoundEDIT from 'assets/icons/pencil.png'
import RoundPRINT from 'assets/icons/plotter_color.png'

import Image from 'next/image'

import StairsArrow from 'assets/icons/stairs.gif'
import StepsCard from 'components/steps/card'
import style from 'styles/StepsCard.module.scss'

const stepsCardTitles = [
  { id: 1, title: 'Load previous pdf', icon: RoundPDF },
  { id: 2, title: 'Make your edits', icon: RoundEDIT },
  { id: 3, title: 'Send your version to print!', icon: RoundPRINT },
]
const WhatWeDo = () => {
  return (
    <div>
      <h1>How does it work?</h1>
      <div className={style.stepsCardMainSection}>
        {stepsCardTitles.map((item) => {
          return (
            <>
              <StepsCard
                key={item.id}
                title={item.title}
                iconName={item.icon}
              />
              {item.id !== 3 && (
                <Image
                  src={StairsArrow}
                  //   fill
                  width={100}
                  height="auto"
                  alt="animated logo stairs"
                />
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default WhatWeDo
