import homeHeaderPic from 'assets/images/young-yellow_1400px.png'
import Button from 'components/button'
import Image from 'next/image'
import styles from 'styles/Home.module.scss'
import WhatWeDo from './whatWeDo'
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.homeHeader}>
        <div className={styles.homeIntro}>
          <h1>Ready to promote your next event?</h1>
          <h3>Start right now with it</h3>
          <Button txt="Sign up for free" />
        </div>
        <div className={styles.homeImage}>
          <Image
            src={homeHeaderPic}
            //   fill
            width={700}
            height="auto"
          />
        </div>
      </header>
      <section className={styles.homeSection}>
        <WhatWeDo />
      </section>
    </div>
  )
}

export default Home
