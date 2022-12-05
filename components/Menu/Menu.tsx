import styles from './Menu.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { TItem } from '../../constants/types-interfaces'

import { MdArrowBackIos } from 'react-icons/md'
import { VscGithub } from 'react-icons/vsc'
import { HiMail } from 'react-icons/hi'
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri'

const Menu = ({ listItems, viewMenu, handleViewMenu }: any) => {
  return (
    <div className={viewMenu ? styles.menuWrapper : ''}>
      <div className={viewMenu ? styles.menuActive : styles.menuDeactive}>
        <div className="flex justify-between items-center">
          <Image
            src="/assets/portfolio-image.png"
            alt="portfolio-image"
            width={50}
            height={50}
          />
          <MdArrowBackIos
            onClick={handleViewMenu}
            className={styles.backIcon}
          />
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
