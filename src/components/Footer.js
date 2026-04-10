import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>GLOW JOB</h2>
            <p className={styles.tagline}>Indulgent lip secrets for the bold and the beautiful.</p>
            <div className={styles.socials}>
              <a href="#">INSTAGRAM</a>
              <a href="#">TIKTOK</a>
              <a href="#">X / TWITTER</a>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.column}>
              <h3>SHOP</h3>
              <a href="#">ALL PRODUCTS</a>
              <a href="#">LIP OILS</a>
              <a href="#">BUTTER BALMS</a>
              <a href="#">BUNDLES</a>
            </div>
            <div className={styles.column}>
              <h3>SUPPORT</h3>
              <a href="#">TRACK ORDER</a>
              <a href="#">SHIPPING & RETURNS</a>
              <a href="#">FAQ</a>
              <a href="#">CONTACT</a>
            </div>
            <div className={styles.column}>
              <h3>LEGAL</h3>
              <a href="#">PRIVACY POLICY</a>
              <a href="#">TERMS OF SERVICE</a>
              <a href="#">REFUND POLICY</a>
            </div>
          </div>

          <div className={styles.newsletter}>
            <h3>JOIN THE GLOWJOB ERA</h3>
            <p>Get exclusive early access to new launches and berry-sweet drops.</p>
            <form className={styles.form}>
              <input type="email" placeholder="EMAIL ADDRESS" className={styles.input} />
              <button type="submit" className={styles.submit}>SIGN UP</button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 GLOW JOB BEAUTY PVT LTD. ALL RIGHTS RESERVED.</p>
          <span>CRAFTED FOR RADIANCE</span>
        </div>
      </div>
    </footer>
  );
}
