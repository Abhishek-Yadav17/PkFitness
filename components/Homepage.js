import styles from '../styles/Homepage.module.scss';
import { useEffect } from 'react';
import Footer from './Footer';
import AboutDetails from './AboutDetails';
import HeroSection from './Hero';
import GetStarted from './GetStarted';
import Memberships from './Memberships';

export default function Homepage() {

  useEffect(() => {
    if (window.innerWidth <= 767) return;

    const loadGsapAnimations = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        `.${styles.rotated} h1:nth-child(1), .${styles.rotated} h1:nth-child(3)`,
        { x: -400 },
        {
          x: 400,
          opacity: 1,
          scrollTrigger: {
            trigger: `.${styles.aboutSection}`,
            start: 'top 160%',
            end: 'bottom 50%',
            scrub: 2,
          },
        }
      );

      gsap.fromTo(
        `.${styles.rotated} h1:nth-child(2)`,
        { x: 400 },
        {
          x: -400,
          opacity: 1,
          scrollTrigger: {
            trigger: `.${styles.aboutSection}`,
            start: 'top 160%',
            end: 'bottom 50%',
            scrub: 2,
          },
        }
      );
    };

    loadGsapAnimations();
  }, []);


  return (
    <>
      <HeroSection />
      <section className={styles.aboutSection}>
        <div className={styles.rotated}>
          <h1>MORE ABOUT</h1>
          <h1>PK FITNESS</h1>
          <h1>& NUTRITIONS</h1>
        </div>
        <AboutDetails />
        <GetStarted />
      </section>
      <Memberships />
      <Footer />
    </>
  );
}
