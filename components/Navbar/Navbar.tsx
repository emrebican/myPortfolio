import styles from './Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

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
