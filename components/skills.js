import styles from "../styles/Skills.module.css"

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapped}>
        <span className={styles.header}>Skills</span>
        <h3>Programming Language</h3>
        <p>
          C, Java, Python, Javascript, Rust, Solidity, Dart, SQL, HTML, CSS{" "}
        </p>
        <h3>Framework</h3>
        <p>React, Vue, Nuxt.js, Next.js, Svelt, Express, Flutter</p>
        <h3>Language</h3>
        <p>Thai (Native), English (Intermediate)</p>
      </div>
    </div>
  )
}
