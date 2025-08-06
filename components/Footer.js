import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.scss';

export default function Footer() {

  const router = useRouter();

  const handleReloadNavigate = (path) => {
    router.push(path).then(() => window.location.reload());
  };

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
            <h4 onClick={() => handleReloadNavigate('/')}>Homepage</h4>
            <h4 onClick={() => handleReloadNavigate('/contact')}>Contact Us</h4>
            <h4 onClick={() => handleReloadNavigate('/aboutus')}>About Us</h4>
          </div>
          <div className={styles.socialMedia}>
            <h2>Social Media</h2>
            <h4 onClick={() => window.open('https://www.instagram.com/pkfitnessandnutritions?igsh=MTN1Z2c4NGRrMGh2NQ%3D%3D&utm_source=qr', '_blank')}>Instagram</h4>
            <h4>LinkedIn</h4>
            <h4>Facebook</h4>
            <h4>Twitter</h4>
          </div>
          <button onClick={() => handleReloadNavigate('/contact')}>Book a Call</button>
        </div>
      </div>
    </footer>
  );
}
