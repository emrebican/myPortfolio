import styles from './Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import { RxHamburgerMenu } from 'react-icons/rx'

import Menu from '../Menu/Menu'

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

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/assets/portfolio-image.png"
          alt="portfolio-image"
          width={70}
          height={70}
        />
        <ul className={styles.list}>
          {listItems.map((item: TItem) => (
            <li key={item.id} className={styles.link}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.menuIcon}>
          <RxHamburgerMenu size={25} />
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar
