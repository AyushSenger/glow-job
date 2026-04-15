"use client";
import styles from "./PressSection.module.css";

const publications = [
  "VOGUE", "ELLE", "HARPER'S BAZAAR", "ALLURE", "COSMOPOLITAN"
];

export default function PressSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <p className={styles.label}>AS SEEN IN</p>
          <div className={`${styles.grid} reveal`}>
            {publications.map((pub) => (
              <span key={pub} className={styles.pub}>{pub}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
