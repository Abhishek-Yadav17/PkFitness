import styles from '../styles/Navbar.module.scss';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar({ locoScroll }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

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
  }, []);

  const scrollToServices = () => {
    if (router.pathname === '/' && locoScroll) {
      locoScroll.scrollTo('#services', {
        offset: 0,
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  return (
    <nav className={styles.nav}>
      <h1>PK Fitness & Nutritions</h1>

      <img src='pkfitnesslogo.jpg' alt='logo'/>

      <div className={styles.navmid}>
        <Link href="/" passHref>
          <h4 data-text="Homepage">Homepage</h4>
        </Link>
        <h4 data-text="Services" style={{ cursor: 'pointer' }} onClick={scrollToServices}>Services</h4>
        <Link href='/aboutus'>
          <h4 data-text="About Us">About Us</h4>
        </Link>
      </div>

      <div
        className={styles.menuIcon}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <i className="ri-menu-line"></i>
      </div>

      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <Link href="/" passHref>
            <h4 onClick={() => setMenuOpen(false)}>Homepage</h4>
          </Link>
          <h4 onClick={scrollToServices} style={{ cursor: 'pointer' }}>Services</h4>
          <Link href='/aboutus' passHref>
            <h4 onClick={() => setMenuOpen(false)}>About Us</h4>
          </Link>
        </div>
      )}
      <Link href='/contact'>
        <button className={styles.navBtn}>Contact Us</button>
      </Link>
    </nav>
  );
}
