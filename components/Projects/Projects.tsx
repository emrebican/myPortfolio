import styles from './Projects.module.scss'
import projects from '../../data/projects.json'
import { TProject } from '../../constants/types-interfaces'
import SingleProject from './SingleProject/SingleProject'

const Projects = () => {
  const displayProjects = projects.map((pro: TProject) => (
    <SingleProject pro={pro} key={pro.id} />
  ))

  return (
    <div id="projects" className={styles.container}>
      <div className={styles.content}>
        <h3>Projects</h3>
        <h1>No time to stop</h1>
        <div className={styles.projectsContainer}>{displayProjects}</div>
      </div>
    </div>
  )
}

export default Projects
