import styles from './SingleProject.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const SingleProject = ({ pro }: any) => {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <div key={pro.id} className={styles.item}>
      <Image
        src={pro.image}
        alt={pro.name}
        width={1000}
        height={1000}
        className={
          loading
            ? 'duration-700 ease-in-out grayscale blur-xl'
            : 'duration-700 ease-in-out grayscale-0 blur-0'
        }
        onLoadingComplete={() => setLoading(false)}
      />
      <div className={styles.info}>
        <small>{pro.made}</small>
        <h2>{pro.name}</h2>
        <Link href={pro.url} className={styles.btn}>
          more info
        </Link>
      </div>
    </div>
  )
}

export default SingleProject
