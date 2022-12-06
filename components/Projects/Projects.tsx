import styles from './Projects.module.scss'
import projects from '../../data/projects.json'

const Projects = () => {
  const displayProjects = projects.map((pro) => (
    <div key={pro.id} className={styles.item}>
      <img src={pro.image} alt={pro.name} />
      <div className={styles.info}>
        <small>with {pro.made}</small>
        <h2>{pro.name}</h2>
        <button>more info</button>
      </div>
    </div>
  ))
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Projects</h3>
        <h1>No time to stop</h1>

        <div className={styles.projectsContainer}>
          {/* <div className={styles.item}>
            <img src="/assets/projects/pro-1.jpg" alt="wallpaper" />
            <div className={styles.info}>
              <small>with ReactJS</small>
              <h2>Project Name</h2>
              <button>more info</button>
            </div> 
          </div>*/}
          {displayProjects}
        </div>
      </div>
    </div>
  )
}

export default Projects
