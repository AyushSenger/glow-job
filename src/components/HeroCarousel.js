"use client";
import { useState, useEffect } from "react";
import styles from "./HeroCarousel.module.css";

const slides = [
  {
    image: "/images/hero-1.png",
    title: "High-Shine Revolution",
    subtitle: "Drench your lips in liquid glass with our signature Açaí Kiss Lip Oil.",
    cta: "SHOP LIP OILS"
  },
  {
    image: "/images/hero-2.png",
    title: "The Glowjob Era",
    subtitle: "Playful pigments and indulgent textures for the ultimate lip glow.",
    cta: "EXPLORE COLLECTION"
  },
  {
    image: "/images/hero-3.png",
    title: "Berry Rich Hydration",
    subtitle: "Formulated with powerful extracts for a plumper, juicier pout.",
    cta: "VIEW BUNDLES"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <span className={styles.label}>NEW ARRIVALS</span>
            <h1 className={styles.title}>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            <div className={styles.btnWrapper}>
              <button className={styles.cta}>{slide.cta}</button>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === current ? styles.activeIndicator : ""}`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
