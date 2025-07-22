import styles from '../styles/Navbar.module.scss';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function Navbar() {
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

  const goToServices = () => {
    if (router.pathname !== '/') {
      router.push('/?scrollTo=services');
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  return (
    <nav className={styles.nav}>
      <h1>PK Fitness & Nutritions</h1>

      <img src='pkfitnesslogo.jpg' alt='logo' />

      <div className={styles.navmid}>
        <Link href="/" passHref>
          <h4 data-text="Homepage">Homepage</h4>
        </Link>
        <h4 data-text="Services" style={{ cursor: 'pointer' }} onClick={goToServices}>Services</h4>
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
          <h4 style={{ cursor: 'pointer' }} onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</h4>
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
