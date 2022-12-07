import styles from './About.module.scss'

const About = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>about</h3>
          <h1>Who am I</h1>
          <p>
            Hi, I am Emre, I live in Turkey and I am 28 years old. My front-end
            developer career began almost one year ago. In fact, I got a
            graduate of education faculty from Çukurova University which is a
            prestigious university of our country.
          </p>
          <p>
            I think I am highly talented in React and UI design. However there
            is much more things to learn for me. While I am coding, I pay
            attention Clean Code Principles and creating reusable modules.In my
            opinion programming is like an ocean and I am just little fish, so
            there are many places I could discover. Bye 👋,
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
