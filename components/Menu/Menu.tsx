import styles from './Menu.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import { MdArrowBackIos } from 'react-icons/md'
import { VscGithub } from 'react-icons/vsc'
import { HiMail } from 'react-icons/hi'
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri'

type TItem = {
  url: string
  title: string
  id: number
}

const listItems = [
  { url: '/', title: 'home', id: 1 },
  { url: '/', title: 'about', id: 2 },
  { url: '/', title: 'skills', id: 3 },
  { url: '/', title: 'projects', id: 4 },
  { url: '/', title: 'contact', id: 5 }
]

const Menu = () => {
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menu}>
        <div className="flex justify-between items-center">
          <Image
            src="/assets/portfolio-image.png"
            alt="portfolio-image"
            width={50}
            height={50}
          />
          <MdArrowBackIos className={styles.backIcon} />
        </div>
        <hr className="bg-gray-300 h-0.5 mt-6 mb-10" />
        <ul className="flex flex-col gap-2">
          {listItems.map((item: TItem) => (
            <li key={item.id} className={styles.menuLink}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.connectWrapper}>
          <p>Connections</p>
          <div className={styles.connect}>
            <span>
              <VscGithub />
            </span>
            <span>
              <RiLinkedinFill />
            </span>
            <span>
              <HiMail />
            </span>
            <span>
              <RiFacebookFill />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
