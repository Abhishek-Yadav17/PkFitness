import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h1>PK Fitness & Nutritions</h1>
          <div className={styles.address}>
            <h5><i class="ri-map-pin-2-fill"></i>Pune, India</h5>
          </div>
          <div className={styles.socials}>
            <i class="ri-instagram-fill"></i>
            <i class="ri-twitter-x-fill"></i>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.pages}>
            <h2>Pages</h2>
            <a href="/" passHref>
              <h4>Homepage</h4>
            </a>
            <a href="/contact">
              <h4>Contact Us</h4>
            </a>
            <a href="/aboutus">
              <h4>About Us</h4>
            </a>
          </div>
          <div className={styles.socialMedia}>
            <h2>Socail Media</h2>
            <a href='https://www.instagram.com/pkfitnessandnutritions?igsh=MTN1Z2c4NGRrMGh2NQ%3D%3D&utm_source=qr' target='_blank'>
              <h4>Instagram</h4>
            </a>
            <h4>LinkedIn</h4>
            <h4>Facebook</h4>
            <h4>Twitter</h4>
          </div>
          <a href="/contact">
            <button>Book a Call</button>
          </a>
        </div>
      </div>
    </footer>
  );
}
