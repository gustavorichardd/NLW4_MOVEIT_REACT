import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar = () => {
  const { currentExp, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.floor(currentExp * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExp} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}

export default ExperienceBar;