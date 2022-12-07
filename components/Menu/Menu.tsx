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
        <div>
          <div className="flex justify-between items-center">
            <Image
              src="/assets/portfolio-image.png"
              alt="portfolio-image"
              width={50}
              height={50}
            />
            <div className={styles.backIcon} onClick={handleViewMenu}>
              <MdArrowBackIos />
            </div>
          </div>
          <hr className="bg-gray-300 h-0.5 mt-6 mb-10" />
          <ul className="flex flex-col gap-2">
            {listItems.map((item: TItem) => (
              <Link href={item.url} key={item.id} className={styles.menuLink}>
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className={styles.connectWrapper}>
          <p>Connections</p>
          <div className={styles.connect}>
            <Link href="https://github.com/emrebican" target="_blank">
              <VscGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yunus-emre-37179320a/"
              target="_blank"
            >
              <RiLinkedinFill />
            </Link>
            <Link href="mailto:emrebican11@hotmail.com">
              <HiMail />
            </Link>
            <Link
              href="https://www.facebook.com/yunusemre.bican/"
              target="_blank"
            >
              <RiFacebookFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
