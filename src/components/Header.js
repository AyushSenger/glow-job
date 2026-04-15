"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isMenuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <span>PICK ANY 3 FOR ₹1799</span>
          <span>FREE SHIPPING ON ORDERS OVER ₹999</span>
          <span>THE GLOWJOB ERA IS HERE</span>
          <span>PICK ANY 3 FOR ₹1799</span>
          <span>FREE SHIPPING ON ORDERS OVER ₹999</span>
          <span>THE GLOWJOB ERA IS HERE</span>
        </div>
      </div>
      
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <button 
            className={`${styles.menuIcon} ${isMenuOpen ? styles.active : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </button>
          <span className={styles.menuText}>{isMenuOpen ? "CLOSE" : "MENU"}</span>
        </div>

        <div className={styles.logo}>
          <a href="/" onClick={() => setIsMenuOpen(false)}>GLOW JOB</a>
        </div>

        <div className={styles.navRight}>
          <button className={styles.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </button>
          <button className={styles.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </button>
          <button className={styles.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </button>
        </div>
      </nav>

      {/* Full-screen Menu Drawer */}
      <div className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerInner}>
          <ul className={styles.menuLinks}>
            <li style={{"--i": 1}}><a href="#shop" onClick={() => setIsMenuOpen(false)}>SHOP ALL</a></li>
            <li style={{"--i": 2}}><a href="#ingredients" onClick={() => setIsMenuOpen(false)}>INGREDIENTS</a></li>
            <li style={{"--i": 3}}><a href="#story" onClick={() => setIsMenuOpen(false)}>OUR STORY</a></li>
            <li style={{"--i": 4}}><a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a></li>
          </ul>
          <div className={styles.drawerFooter}>
            <div className={styles.socials}>
              <a href="#">INSTAGRAM</a>
              <a href="#">TIKTOK</a>
            </div>
            <p className={styles.copyright}>&copy; 2026 GLOW JOB BEAUTY</p>
          </div>
        </div>
      </div>
    </header>
  );
}

