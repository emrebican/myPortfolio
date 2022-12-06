import styles from './Skills.module.scss'
import skillsItems from '../../data/skills.json'
import Image from 'next/image'
import { TSkill } from '../../constants/types-interfaces'

const Skills = () => {
  return (
    <div id="skills" className={styles.container}>
      <div className={styles.content}>
        <h3>Skills</h3>
        <h1>They are beautiful</h1>
        <div className={styles.items}>
          {skillsItems.map((skill: TSkill) => (
            <div key={skill.id} className={styles.item}>
              <Image
                src={skill.image}
                width={50}
                height={50}
                alt={skill.title}
              />
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
