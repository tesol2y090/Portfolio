import Head from "next/head"
import styles from "../styles/Home.module.css"

import AboutMe from "../components/about_me"
import Skills from "../components/skills"
import Experiences from "../components/experiences"
import Project from "../components/project"

export default function Home() {
  return (
    <div>
      <div className={styles.landing}>
        <Head>
          <title>GAИG Portfolio</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className={styles.svgWrapper}>
          <svg height='240' width='840' xmlns='http://www.w3.org/2000/svg'>
            <rect className={styles.shape} height='240' width='840' />
          </svg>
          <div className={styles.title}>
            Hi, My name is <span>GAИG.</span>
            <br />A full-stack developer.
          </div>
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Experiences />
      <Project />
    </div>
  )
}
