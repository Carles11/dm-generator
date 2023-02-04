import Layout from 'components/layout'
import React from 'react'

import styles from 'styles/Prices.module.scss'

const Prices = () => {
  function CardDescription({ title, description }) {
    return (
      <div className={styles.cardDescription}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    )
  }

  function CardBilling({ price, recurrency }) {
    return (
      <div className={styles.cardBilling}>
        <p>
          <strong className={styles.price}>€ {price}</strong>
        </p>
        <p>
          <span className={styles.recurrency}>
            Billed monthly or $ {recurrency}/anually
          </span>
        </p>
      </div>
    )
  }

  function CardFeatures({ data }) {
    return (
      <div className={styles.cardFeatures}>
        <ul>
          {data.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    )
  }

  function CardAction({ clickMe }) {
    return (
      <div className={styles.cardAction}>
        <button onClick={clickMe}>BUY NOW</button>
      </div>
    )
  }

  function PricingCard(props) {
    const {
      type,
      title,
      description,
      price,
      recurrency,
      mostPopular,
      data,
      clickMe,
    } = props

    return (
      <div className={`${styles.card} ${styles.pricingCard} ${styles[type]}`}>
        {mostPopular ? (
          <span className={`${styles.card} ${styles.mostPopular}`}>
            Most Popular
          </span>
        ) : null}
        <CardDescription title={title} description={description} />
        <CardBilling price={price} recurrency={recurrency} />
        <CardFeatures data={data} />
        <CardAction clickMe={clickMe} />
      </div>
    )
  }
  function handleClick() {
    alert('Button clicked!')
  }

  return (
    <Layout>
      <div className={styles.appWrapper}>
        {cardsData.map((props) => {
          return <PricingCard {...props} key={props.id} clickMe={handleClick} />
        })}
      </div>
    </Layout>
  )
}

const cardsData = [
  {
    id: 1,
    type: 'free',
    title: 'Free Plan',
    description: 'Create for web',
    recurrency: 0,
    price: 0,
    mostPopular: false,
    data: [
      'Unlimited digital conversions (Flyer or brochures)',
      'Only for web and digital marketing',
    ],
  },
  {
    id: 2,
    type: 'basic',
    title: 'Basic Plan',
    description: 'Small media Web and Print',
    recurrency: 699.99,
    price: 59.99,
    mostPopular: false,
    data: [
      'All from free plan',
      '1 flyer per month and 1 program per year print conversion',
    ],
  },
  {
    id: 3,
    type: 'medium',
    title: 'Medium Plan',
    description: 'Medium media Web and Print',
    recurrency: 6999.99,
    price: 599.99,
    mostPopular: true,
    data: [
      'All from Basic plan',
      '6 flyer per month and 6 brochures per year to print conversions',
      '24/7 Support',
    ],
  },
  {
    id: 4,
    type: 'pro',
    title: 'Pro Plan',
    description: 'Big media Web and Print',
    recurrency: 9999.99,
    price: 999.99,
    mostPopular: false,
    data: [
      'All from Medium plan',
      'Unlimited print conversions, flyer or program',
      '24/7 Support',
    ],
  },
]

export default Prices
