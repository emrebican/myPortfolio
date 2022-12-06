import styles from './SingleProject.module.scss'
import Link from 'next/link'

const SingleProject = ({ pro }: any) => {
  return (
    <div key={pro.id} className={styles.item}>
      <img src={pro.image} alt={pro.name} />
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
