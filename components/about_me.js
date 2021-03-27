import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import styles from "../styles/AboutMe.module.css"

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
  return (
    <div className={styles.container}>
      <div data-aos='fade-down' className={styles.wrapped}>
        <span className={styles.header}>About me</span>
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profileLeft}>
          <div
            data-aos='fade-right'
            data-aos-duration='300'
            className={styles.pair}
          >
            <h3>Full Name:</h3>
            <p>🦄Kantapat Chankasem</p>
          </div>
          <div
            data-aos='fade-right'
            data-aos-duration='600'
            className={styles.pair}
          >
            <h3>Birth Day:</h3>
            <p>13 Sep 1998</p>
          </div>
          <div
            data-aos='fade-right'
            data-aos-duration='900'
            className={styles.pair}
          >
            <h3>Address:</h3>
            <p>Bangkok, Thailand</p>
          </div>
        </div>
        <div className={styles.profileImg} />
        <div className={styles.profileRight}>
          <div
            data-aos='fade-left'
            data-aos-duration='300'
            className={styles.pair}
          >
            <h3>Education:</h3>
            <p>Chulalongkorn University</p>
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='600'
            className={styles.pair}
          >
            <h3>Major:</h3>
            <p>Computer Science</p>
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='900'
            className={styles.pair}
          >
            <h3>Github:</h3>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href='https://github.com/tesol2y090'
              target='_blank'
            >
              <p>https://github.com/tesol2y090</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
