import styles from '../styles/Navbar.module.scss';
import { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Navbar() {

  useEffect(() => {
    gsap.fromTo(
      `.${styles.nav}`,
      {
        y: -100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1
      }
    );
  }, [])

  return (
    <nav className={styles.nav}>
      <h1>PK Fitness & Nutrition</h1>
      <div className={styles.navmid}>
        <Link href="/" passHref>
          <h4 data-text="Homepage">Homepage</h4>
        </Link>
        <h4 data-text="Services">Services</h4>
        <h4 data-text="Testimonials">Testimonials</h4>
      </div>
      <Link href='/contact'>
        <button className={styles.navBtn}>Contact Us</button>
      </Link>
    </nav>
  );
}
