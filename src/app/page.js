"use client";
import { useEffect } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGrid from "@/components/ProductGrid";
import Ingredients from "@/components/Ingredients";
import GlowGallery from "@/components/GlowGallery";
import PressSection from "@/components/PressSection";
import TheGlossGuide from "@/components/TheGlossGuide";
import Reviews from "@/components/Reviews";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <div className={styles.page}>
      <HeroCarousel />
      
      <PressSection />
      
      <section className={styles.intro}>
        <div className="container">
          <div className={`${styles.introSplit} reveal`}>
            <div className={styles.introImage}>
              <img src="/images/hero-2.png" alt="Glossy Lips" />
            </div>
            <div className={styles.introContent}>
              <span className={styles.label}>OUR MISSION</span>
              <h2 className={styles.serif}>The Wet Look, Reimagined</h2>
              <p>
                We're obsessed with the shine. Not the sticky, old-school kind, but the high-performance, 
                soul-soothing glow. Our Açaí-infused formulas are designed to drench your lips in 
                moisture while delivering a mirror-like finish that lasts.
              </p>
              <div className={styles.signature}>
                <span>Stay Glossy,</span>
                <strong>Glow Job Team</strong>
              </div>
              <button className={styles.linkBtn}>DISCOVER THE SCIENCE OF SHINE</button>
            </div>
          </div>
        </div>
      </section>

      <TheGlossGuide />

      <div className="reveal">
        <ProductGrid />
      </div>

      <Ingredients />

      <Reviews />

      <GlowGallery />

      <section className={`${styles.banner} reveal`}>
        <div className={styles.bannerOverlay}></div>
        <div className={styles.bannerContent}>
          <h2 className={styles.serif}>Join the Glowjob Era</h2>
          <p>Sign up for 10% off your first order and stay updated on our legendary berry drops.</p>
          <button className={styles.primaryBtn}>GET THE GLOW</button>
        </div>
      </section>
    </div>
  );
}

