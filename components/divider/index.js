import style from 'styles/Divider.module.scss'

const Divider = () => {
  return (
    <>
      <div className={style.ssStyleFoldedcorner} />
      <svg
        id="bigTriangleColor"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path fill="#00a46b" d="M0 0 L50 100 L100 0 Z" />
      </svg>
    </>
  )
}

export default Divider
