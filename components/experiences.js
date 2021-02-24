import styles from "../styles/Experiences.module.css"

export default function Experiences() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapped}>
        <span className={styles.header}>Experiences</span>
        <div className={styles.expRow}>
          <div className={styles.left}>
            <img src='gb-logo.jpg' className={styles.logo} />
          </div>
          <ul className={styles.detail}>
            <h3>Full-stack Developer @ Grown Beyond</h3>
            <li>Risk Management Platform</li>
            <li>Document Management Platform</li>
            <li>Nuxt.js</li>
            <li>Next.js</li>
            <li>Express</li>
            <li>Firebase</li>
            <li>April 2020 - Febuary 2021</li>
          </ul>
        </div>
        <div className={styles.expRow}>
          <div className={styles.left}>
            <img src='stell-logo.png' className={styles.logo} />
          </div>
          <ul className={styles.detail}>
            <h3>RPA Developer @ Stelligence</h3>
            <li>Aumomate schedule event task</li>
            <li>Automation Anywhere</li>
            <li>August 2020 - November 2020</li>
          </ul>
        </div>
        <div className={styles.expRow}>
          <div className={styles.left}>
            <img src='elect-logo.jpg' className={styles.logo} />
          </div>
          <ul className={styles.detail}>
            <h3>Frontend Developer @ Elect</h3>
            <li>Data visualization</li>
            <li>Nuxt.js</li>
            <li>Next.js</li>
            <li>D3.js</li>
            <li>Febuary 2020 - Febuary 2021</li>
          </ul>
        </div>
        <div className={styles.expRow}>
          <div className={styles.left}>
            <img src='pu-logo.png' className={styles.logo} />
          </div>
          <ul className={styles.detail}>
            <h3>Frontend Developer @ Punch Up</h3>
            <li>Data visualization</li>
            <li>Nuxt.js</li>
            <li>D3.js</li>
            <li>Febuary 2020 - August 2020</li>
          </ul>
        </div>
        <div className={styles.expRow}>
          <div className={styles.left}>
            <img src='ypp-logo.jpeg' className={styles.logo} />
          </div>
          <ul className={styles.detail}>
            <h3>Event Organizer @ YPP</h3>
            <li>Create 3 startup camp</li>
            <li>Bussiness camp</li>
            <li>Design camp</li>
            <li>Developer camp</li>
            <li>March 2018 - August 2018</li>
          </ul>
        </div>
        <div className={styles.expRow}>
          <div className={styles.left}>
            <img src='dev-network-logo.png' className={styles.logo} />
          </div>
          <ul className={styles.detail}>
            <h3>Blockchain Developer Intern @ Devnetwork</h3>
            <li>Hyperledger Fabric</li>
            <li>Chai.js</li>
            <li>June 2018 - August 2018</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
