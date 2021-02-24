import styles from "../styles/AboutMe.module.css"

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapped}>
        <span className={styles.header}>About me</span>
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profileLeft}>
          <div className={styles.pair}>
            <h3>Full Name:</h3>
            <p>🦄Kantapat Chankasem</p>
          </div>
          <div className={styles.pair}>
            <h3>Birth Day:</h3>
            <p>13 Sep 1998</p>
          </div>
          <div className={styles.pair}>
            <h3>Address:</h3>
            <p>Bangkok, Thailand</p>
          </div>
        </div>
        <div className={styles.profileImg} />
        <div className={styles.profileRight}>
          <div className={styles.pair}>
            <h3>Education:</h3>
            <p>Chulalongkorn University</p>
          </div>
          <div className={styles.pair}>
            <h3>Major:</h3>
            <p>Computer Science</p>
          </div>
          <div className={styles.pair}>
            <h3>Sport:</h3>
            <p>Basketball 🏀</p>
          </div>
        </div>
      </div>
    </div>
  )
}
