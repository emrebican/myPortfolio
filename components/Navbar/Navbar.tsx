import styles from './Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import listItems from '../../data/list.json'
import { TItem } from '../../constants/types-interfaces'
import { RxHamburgerMenu } from 'react-icons/rx'

import Menu from '../Menu/Menu'

const Navbar = () => {
  const [viewMenu, setViewMenu] = useState<boolean>(false)
  console.log(viewMenu)

  const handleViewMenu = () => {
    setViewMenu(!viewMenu)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/assets/portfolio-image.png"
          alt="portfolio-image"
          width={70}
          height={70}
        />
        <Menu
          listItems={listItems}
          viewMenu={viewMenu}
          handleViewMenu={handleViewMenu}
        />
        <ul className={styles.list}>
          {listItems.map((item: TItem) => (
            <li key={item.id} className={styles.link}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div onClick={handleViewMenu} className={styles.menuIcon}>
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar
