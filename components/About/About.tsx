import styles from './About.module.scss'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>about</h3>
          <h1>Who am I</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            iste suscipit quibusdam, repellendus numquam facere possimus neque
            cum eos nostrum!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            iste suscipit quibusdam, repellendus numquam facere possimus neque
            cum eos nostrum!
          </p>
          {/* eslint-disable react/jsx-no-comment-textnodes */}
          <span>// Still learning...</span>
        </div>
        <img src="/assets/wallpaper.jpg" alt="wallpaper" />
      </div>
    </div>
  )
}

export default About
