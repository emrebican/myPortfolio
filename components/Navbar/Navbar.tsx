import styles from './Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import listItems from '../../data/list.json'
import { TItem } from '../../constants/types-interfaces'
import { RxHamburgerMenu } from 'react-icons/rx'

import Menu from '../Menu/Menu'

const Navbar = ({ viewMenu, handleViewMenu, shadow }: any) => {
  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] bg-gray-50/90 transition-all duration-300 ease-in-out'
          : 'fixed w-full h-20 z-[100] bg-transparent transition-all duration-300 ease-in-out'
      }
    >
      <div className={styles.content}>
        <Link href="/">
          <Image
            src="/assets/portfolio-image.png"
            alt="portfolio-image"
            width={70}
            height={70}
            className="hover:scale-105 transition-all duration-200 ease-in"
          />
        </Link>
        <Menu
          listItems={listItems}
          viewMenu={viewMenu}
          handleViewMenu={handleViewMenu}
        />
        <ul className={styles.list}>
          {listItems.map((item: TItem) => (
            <Link key={item.id} className={styles.link} href={item.url}>
              {item.title}
            </Link>
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
