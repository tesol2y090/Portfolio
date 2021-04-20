import React, { useEffect, useContext } from "react"
import Head from "next/head"
import Aos from "aos"

import styles from "../styles/Home.module.css"
import { ContractsContext } from "../hooks/useContracts"

export default function Header() {
  const { MessagePool } = useContext(ContractsContext)
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
  return (
    <div>
      {/* {MessagePool.allMessages
        ? MessagePool.allMessages.map((message) => <div>{message}</div>)
        : null} */}
      <div data-aos='fade-up' className={styles.circle1} />
      <div data-aos='fade-down' className={styles.circle2} />
      <div className={styles.landing}>
        <Head>
          <title>Kantapat C.</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div data-aos='fade-up' className={styles.svgWrapper}>
          <svg height='240' width='840' xmlns='http://www.w3.org/2000/svg'>
            <rect className={styles.shape} height='240' width='840' />
          </svg>
          <div className={styles.title}>
            Hi, My name is <span>GAИG.</span>
            <br />A full-stack developer.
          </div>
        </div>
      </div>
    </div>
  )
}
