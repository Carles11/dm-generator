import RoundPDF from 'assets/icons/pdf_round.png'
import RoundEDIT from 'assets/icons/pencil.png'
import RoundPRINT from 'assets/icons/plotter_color.png'
import StepsArrow from 'components/arrow/steps-arrow'

// import Image from 'next/image'

// import StairsArrow from 'assets/icons/stairs.gif'
import StepsCard from 'components/steps/card'
import style from 'styles/HowItWorks.module.scss'

const stepsCardTitles = [
  {
    id: 1,
    title: 'Load your favorite pdf or create your own',
    icon: RoundPDF,
    link: '',
  },
  { id: 2, title: 'Make your edits', icon: RoundEDIT, link: '' },
  {
    id: 3,
    title: 'Download your print-ready file!',
    icon: RoundPRINT,
    link: '',
  },
]
const HowItWorks = () => {
  return (
    <div className={style.howItWorksTopSection}>
      <h1>How does it work?</h1>
      <div className={style.howItWorksSection}>
        {stepsCardTitles.map((item) => {
          return (
            <div className={style.howItWorksInnerSection}>
              <StepsCard
                key={item.id}
                title={item.title}
                iconName={item.icon}
                link={item.link}
                showArrow
              />
              {item.id !== 3 && (
                // <Image
                //   src={StairsArrow}
                //   //   fill
                //   width={100}
                //   height="auto"
                //   alt="animated logo stairs"
                // />
                <StepsArrow />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HowItWorks
