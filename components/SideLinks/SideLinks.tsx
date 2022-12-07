import styles from './SideLinks.module.scss'
import Link from 'next/link'
import { VscGithub } from 'react-icons/vsc'
import { MdFacebook } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'

const SideLinks = () => {
  return (
    <ul className={styles.connect}>
      <li>
        <Link href="https://github.com/emrebican" target="_blank">
          <span>
            <VscGithub />
          </span>
          <p>Github</p>
        </Link>
      </li>
      <hr />
      <li>
        <Link
          href="https://www.linkedin.com/in/yunus-emre-37179320a/"
          target="_blank"
        >
          <span>
            <AiFillLinkedin />
          </span>
          <p>Linkedin</p>
        </Link>
      </li>
      <hr />
      <li>
        <Link href="https://www.facebook.com/yunusemre.bican/" target="_blank">
          <span>
            <MdFacebook />
          </span>
          <p>Facebook</p>
        </Link>
      </li>
    </ul>
  )
}

export default SideLinks
