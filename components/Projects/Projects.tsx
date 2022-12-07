import styles from './Projects.module.scss'
import Link from 'next/link'
import projects from '../../data/projects.json'
import { TProject } from '../../constants/types-interfaces'
import SingleProject from './SingleProject/SingleProject'
import { IoIosArrowUp } from 'react-icons/io'

const Projects = () => {
  const displayProjects = projects.map((pro: TProject) => (
    <SingleProject pro={pro} key={pro.id} />
  ))

  return (
    <div id="projects" className={styles.container}>
      <div className={styles.content}>
        <h3>Projects</h3>
        <div className={styles.group}>
          <h1>NaN stop</h1>
          <Link href="https://github.com/emrebican" target="_blank">
            see more
          </Link>
        </div>
        <div className={styles.projectsContainer}>{displayProjects}</div>
      </div>
      <div className={styles.upArrow}>
        <Link href="/">
          <IoIosArrowUp />
        </Link>
      </div>
    </div>
  )
}

export default Projects
