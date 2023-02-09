import homeHeaderPic from 'assets/icons/Corporativo_logo.png'
import Button from 'components/button'
import Divider from 'components/divider'
import Image from 'next/image'
import styles from 'styles/Home.module.scss'
import HowItWorks from './howItWorks'
import PlansInformation from './plansInfo'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.homeHeader}>
        <div className={styles.homeIntro}>
          <h1>Ready to promote your next move?</h1>
          <h3>Get it done in minutes, not weeks.</h3>
          <Button txt="Sign up for free" link="/register" />
        </div>
        <div className={styles.homeImage}>
          <Image
            src={homeHeaderPic}
            //   fill
            priority={true}
            width={500}
            height="auto"
            alt="corporativo logo"
          />
        </div>
      </header>
      <section className={styles.homeSection}>
        <HowItWorks />
      </section>
      <Divider />
      <section className={styles.homeSection}>
        <PlansInformation />
      </section>
    </div>
  )
}

export default Home
