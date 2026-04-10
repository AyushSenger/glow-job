"use client";
import { useEffect, useRef } from "react";
import styles from "./Ingredients.module.css";

export default function Ingredients() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.content} reveal`}>
            <span className={styles.label}>THE SCIENCE OF SHINE</span>
            <h2 className={styles.title}>The Açaí <br /> Infusion</h2>
            <p className={styles.descr}>
              Our signature formula isn't just about the surface glow. We infuse every tube with raw Açaí berry extracts sourced from the Amazon—packed with antioxidants that heal and plump from within.
            </p>
            <ul className={styles.benefits}>
              <li className="reveal" style={{"--delay": 1}}>
                <strong>Bio-Shine Matrix</strong>
                <span>Reflective polymers that mimic liquid glass.</span>
              </li>
              <li className="reveal" style={{"--delay": 2}}>
                <strong>Vitamin C+E Drops</strong>
                <span>Essential nutrients to prevent darkening.</span>
              </li>
              <li className="reveal" style={{"--delay": 3}}>
                <strong>Hydra-Cell Technology</strong>
                <span>Traps moisture for up to 12 hours.</span>
              </li>
            </ul>
          </div>
          
          <div className={`${styles.imageWrapper} reveal`}>
            <img src="/images/ingredients-1.png" alt="Açaí macro" className={styles.mainImg} />
            <div className={styles.floatingBerry1}></div>
            <div className={styles.floatingBerry2}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
