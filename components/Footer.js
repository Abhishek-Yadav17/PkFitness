import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h1>PK Fitness & Nutrition</h1>
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
            <Link href="/" passHref>
              <h4>Homepage</h4>
            </Link>
            <Link href="/contact">
              <h4>Contact Us</h4>
            </Link>
            <h4>Services</h4>
            <h4>Testimonials</h4>
          </div>
          <div className={styles.socialMedia}>
            <h2>Socail Media</h2>
            <h4>Instagram</h4>
            <h4>LinkedIn</h4>
            <h4>Facebook</h4>
            <h4>Twitter</h4>
          </div>
          <Link href='/contact'>
            <button>Book a Call</button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
