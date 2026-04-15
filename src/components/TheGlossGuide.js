"use client";
import styles from "./TheGlossGuide.module.css";

const features = [
  {
    title: "Liquid Glass Lustre",
    description: "Multi-dimensional polymers that reflect light for a mirror-like finish that never feels sticky.",
    icon: "✧"
  },
  {
    title: "Clinical Skin Care",
    description: "Infused with cold-pressed Açaí oil and Vitamin E to repair the moisture barrier while you wear it.",
    icon: "✦"
  },
  {
    title: "Volume Boost",
    description: "Natural ginger extracts and peptide chains that gently plump and define your lip contour.",
    icon: "❖"
  }
];

export default function TheGlossGuide() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>THE SCIENCE OF GLOW</span>
          <h2 className={styles.title}>The Triple Gloss Promise</h2>
        </div>
        
        <div className={`${styles.grid} stagger-container`}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${styles.card} reveal`}
              style={{"--delay": index + 1}}
            >
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
