import styles from './Main.module.scss'
import { useState, useEffect } from 'react'

const Main = () => {
  const [text, setText] = useState<string>('eating')

  function textLoading() {
    setTimeout(() => {
      setText('eating')
    }, 0)

    setTimeout(() => {
      setText('walking')
    }, 4000)

    setTimeout(() => {
      setText('coding')
    }, 8000)
  }

  useEffect(() => {
    textLoading()
    setInterval(textLoading, 12000)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>
            Hi, I&apos;m <span>Emre</span>
          </h1>
          <h1>A Front End Web Developer</h1>
          <p>
            I&apos;m a front end developer specializing in building and
            designing looking good applications. Recently I&apos;m working on
            challenging technologies while learning also back-end systems.
          </p>
        </div>
        <div className={styles.text}>
          <p>Everyday, I&apos;m</p>
          <span>{text}</span>
        </div>
      </div>
    </div>
  )
}

export default Main
