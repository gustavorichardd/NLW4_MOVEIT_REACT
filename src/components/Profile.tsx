import styles from '../styles/components/Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/gustavorichardd.png" alt="Gustavo Richard" />
      <div>
        <strong>Gustavo Richard</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  )
}

export default Profile;