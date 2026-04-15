"use client";
import { useState, useEffect } from "react";
import styles from "./Reviews.module.css";

const reviews = [
  {
    text: "The first lip oil that actually stays glossy for hours. It feels more like a luxury treatment than a makeup product.",
    author: "Sophia R.",
    role: "Verified Buyer"
  },
  {
    text: "Obsessed with 'After Dark'. It gives that perfect berry tint without any stickiness. My lips feel so much healthier.",
    author: "Elena M.",
    role: "Professional Makeup Artist"
  },
  {
    text: "I've tried every high-end brand, but Glow Job is on another level. The shine is truly mirror-like.",
    author: "Maya J.",
    role: "Beauty Editor"
  }
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.quoteIcon}>"</div>
          <div className={styles.carousel}>
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className={`${styles.slide} ${index === current ? styles.active : ""}`}
              >
                <p className={styles.text}>{review.text}</p>
                <div className={styles.author}>
                  <strong>{review.author}</strong>
                  <span>{review.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.indicators}>
            {reviews.map((_, index) => (
              <button 
                key={index}
                className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
