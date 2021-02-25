import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import styles from "../styles/Skills.module.css"

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.wrapped}>
        <span data-aos='fade-down' className={styles.header}>
          Skills
        </span>
        <div data-aos='fade-right' data-aos-duration='300'>
          <h3>Programming Language</h3>
          <p>
            C, Java, Python, Javascript, Rust, Solidity, Dart, SQL, HTML, CSS{" "}
          </p>
        </div>
        <div data-aos='fade-right' data-aos-duration='600'>
          <h3>Framework</h3>
          <p>React, Vue, Nuxt.js, Next.js, Svelt, Express, Flutter</p>
        </div>
        <div data-aos='fade-right' data-aos-duration='900'>
          <h3>Language</h3>
          <p>Thai (Native), English (Intermediate)</p>
        </div>
      </div>
    </div>
  )
}
