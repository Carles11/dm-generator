import StepsCard from 'components/steps/card'

import style from 'styles/PlansInfo.module.scss'

const PlansInfo = () => {
  const stepsPlans = [
    {
      id: 1,
      title: 'Free Plan',
      description: ['For private users or small companies'],
      btnText: 'Sign up now',
      link: '/pricing',
    },
    {
      id: 2,
      title: 'Pro Plan',
      description: [
        'Create a company account to share between Teams of your company. Collaborate on documents together and at the same time.',
      ],
      btnText: 'See the details',
      link: '/pricing',
    },
    {
      id: 3,
      title: 'Pro Plan for Teams',
      description: [
        'For big corporations. Create accounts for all your subsidiaries',
      ],
      btnText: 'All covered',
      link: '/pricing',
    },
  ]
  return (
    <div className={style.plansInfoTopLevelSection}>
      <h1>Chose the best plan for your needs</h1>
      <div className={style.plansInfoSection}>
        {stepsPlans.map((item) => {
          return (
            <>
              <StepsCard
                key={item.id}
                title={item.title}
                descriptions={item.description}
                btnText={item.btnText}
                link={item.link}
              />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default PlansInfo