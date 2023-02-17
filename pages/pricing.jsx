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
        <button onClick={clickMe}>CONTACT SALES</button>
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
      <h1>Pricing</h1>
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
      'Unlimited digital conversions',
      'one user account',
      'Export only for web and digital marketing',
    ],
  },
  /*   {
    id: 2,
    type: 'basic',
    title: 'Basic Plan',
    description: 'Small media Web and Print',
    recurrency: 599.99,
    price: 59.99,
    mostPopular: false,
    data: [
      'All from free plan',
      '1 flyer per month and 1 program per year ready to print conversion',
      'No adverts',
      'Customer support within 24h.',
    ],
  }, */
  {
    id: 3,
    type: 'pro',
    title: 'Pro Plan',
    description: 'Medium media Web and Print',
    recurrency: 1599.99,
    price: 159.99,
    mostPopular: true,
    data: [
      'All from Basic plan',
      '6 flyer per month and 6 brochures per year ready to print conversions',
      'one company account, 5 user accounts',
      'Priority customer support within 12h.',
    ],
  },
  {
    id: 4,
    type: 'teams',
    title: 'Teams Plan',
    description: 'Big media Web and Print',
    recurrency: 4999.99,
    price: 499.99,
    mostPopular: false,
    data: [
      'All from Pro plan',
      'Unlimited ready to print conversions, flyer or program',
      'unlimited company accounts, unlimited user accounts',
      'Dedicated customer support within 30min.',
    ],
  },
]

export default Prices
