"use client";
import styles from "./GlowGallery.module.css";

const items = [
  { img: "/images/hero-2.png", size: styles.large, title: "After Dark Glow" },
  { img: "/images/hero-1.png", size: styles.small, title: "Liquid Glass" },
  { img: "/images/hero-3.png", size: styles.medium, title: "Berry Burst" },
  { img: "/images/product-2.png", size: styles.square, title: "Peach Nektar" }
];

export default function GlowGallery() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>SEEN ON YOU</span>
          <h2 className={styles.title}>The Glow Journal</h2>
        </div>
        
        <div className={`${styles.grid} stagger-container`}>
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${item.size} reveal`} 
              style={{"--delay": index + 1}}
            >
              <div className={styles.imgWrap}>
                <img src={item.img} alt={item.title} />
                <div className={styles.overlay}>
                  <span>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <button className={styles.viewAll}>VIEW EDITORIAL LOOKBOOK</button>
        </div>
      </div>
    </section>
  );
}
