import style from 'styles/StepsArrow.module.scss'

const StepsArrow = () => {
  return (
    <ul className={style.loadingFrame}>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
    </ul>
  )
}

export default StepsArrow
