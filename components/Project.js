import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import styles from "../styles/Project.module.css"

export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])

  function open(url) {
    window.open(url, "_blank")
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapped}>
        <span data-aos='fade-down' className={styles.header}>
          Projects
        </span>
        <div className={styles.cardContainer}>
          <div
            data-aos='zoom-out'
            data-aos-duration='600'
            className={styles.card}
          >
            <img src='scii-ex-1.png' className={styles.img} />
            <div className={styles.detail}>View</div>
          </div>
          <div
            data-aos='zoom-out'
            data-aos-duration='600'
            className={styles.card}
          >
            <img src='curm.png' className={styles.img} />
            <div className={styles.detail}>View</div>
          </div>
          <div
            data-aos='zoom-out'
            data-aos-duration='600'
            className={styles.card}
            onClick={() => open("https://elect.in.th/coup-board/")}
          >
            <img src='coup-board.png' className={styles.img} />
            <div className={styles.detail}>View</div>
          </div>
          <div
            data-aos='zoom-out'
            data-aos-duration='600'
            className={styles.card}
            onClick={() =>
              open(
                "https://www.thairath.co.th/spotlight/dtacstopcyberbullying/"
              )
            }
          >
            <img src='dtac.png' className={styles.img} />
            <div className={styles.detail}>View</div>
          </div>
          <div
            data-aos='zoom-out'
            data-aos-duration='600'
            className={styles.card}
            onClick={() => open("https://factorfake.elect.in.th/")}
          >
            <img src='factfake.png' className={styles.img} />
            <div className={styles.detail}>View</div>
          </div>
          <div
            data-aos='zoom-out'
            data-aos-duration='600'
            className={styles.card}
            onClick={() => open("https://past-election-map.elect.in.th/")}
          >
            <img src='past.png' className={styles.img} />
            <div className={styles.detail}>View</div>
          </div>
          <div
            data-aos='zoom-out'
            data-aos-duration='600'
            className={styles.card}
            onClick={() =>
              open("https://theyworkforus.elect.in.th/senate/score/")
            }
          >
            <img src='senate.png' className={styles.img} />
            <div className={styles.detail}>View</div>
          </div>
          <div
            data-aos='zoom-out'
            data-aos-duration='600'
            className={styles.card}
            onClick={() => open("https://elect.in.th/once-we-voted-yes/")}
          >
            <img src='yote-yes.png' className={styles.img} />
            <div className={styles.detail}>View</div>
          </div>
          <div
            data-aos='zoom-out'
            data-aos-duration='600'
            className={styles.card}
            onClick={() => open("https://tamago.finance/")}
          >
            <img src='tamago-finance.png' className={styles.img} />
            <div className={styles.detail}>View</div>
          </div>
        </div>
      </div>
    </div>
  )
}
