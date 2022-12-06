import Link from 'next/link'
import styles from './Main.module.scss'

import { VscGithub } from 'react-icons/vsc'
import { HiMail } from 'react-icons/hi'
import { MdFacebook } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'

const Main = () => {
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
      </div>
      <ul className={styles.connect}>
        <li>
          <Link href="/">
            <span>
              <VscGithub />
            </span>
            <p>Github</p>
          </Link>
        </li>
        <hr />
        <li>
          <Link href="/">
            <span>
              <AiFillLinkedin />
            </span>
            <p>Linkedin</p>
          </Link>
        </li>
        <hr />
        <li>
          <Link href="/">
            <span>
              <MdFacebook />
            </span>
            <p>Facebook</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Main
