import { useEffect } from 'react';
import styles from '../styles/Memberships.module.scss';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Memberships() {
  useEffect(() => {
    if (window.innerWidth <= 767) return;

    gsap.fromTo(
      `.${styles.membershipsSection} > h1`,
      { y: 100, scale: 0, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: `.${styles.membershipsSection}`,
          start: 'top 160%',
          end: 'bottom 50%',
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      `.${styles.card}:nth-child(1)`,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.membershipsSection}`,
          start: 'top 200%',
          end: 'bottom 100%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      `.${styles.featured}`,
      { scale: 0.2, opacity: 0 },
      {
        scale: 1.1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.membershipsSection}`,
          start: 'top 200%',
          end: 'bottom 100%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      `.${styles.card}:nth-child(3)`,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.membershipsSection}`,
          start: 'top 200%',
          end: 'bottom 100%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section className={styles.membershipsSection}>
      <h1>MEMBERSHIPS</h1>
      <div className={styles.plans}>
        <div className={styles.card}>
          <div className={styles.planDetails}>
            <h2>Plan 1</h2>
            <img src="/plan2.webp" alt="plan1" />
            <h3>Monthly</h3>
          </div>
          <div className={styles.planList}>
            <h4><i className="ri-check-line"></i>12 Classes Per Month</h4>
            <h4><i className="ri-check-line"></i>3 Classes Per Week</h4>
            <h4><i className="ri-check-line"></i>No Joining Fees</h4>
          </div>
          <Link href="/contact">
            <button>JOIN NOW</button>
          </Link>
        </div>

        <div className={`${styles.card} ${styles.featured}`}>
          <div className={styles.planDetails}>
            <h2>Plan 3</h2>
            <img src="/plan2.webp" alt="plan1" />
            <h3>Half Yearly</h3>
          </div>
          <div className={styles.planList}>
            <h4><i className="ri-check-line"></i>12 Classes Per Month</h4>
            <h4><i className="ri-check-line"></i>3 Classes Per Week</h4>
            <h4><i className="ri-check-line"></i>No Joining Fees</h4>
          </div>
          <Link href="/contact">
            <button>JOIN NOW</button>
          </Link>
        </div>

        <div className={styles.card}>
          <div className={styles.planDetails}>
            <h2>Plan 2</h2>
            <img src="/plan2.webp" alt="plan1" />
            <h3>Quarterly</h3>
          </div>
          <div className={styles.planList}>
            <h4><i className="ri-check-line"></i>12 Classes Per Month</h4>
            <h4><i className="ri-check-line"></i>3 Classes Per Week</h4>
            <h4><i className="ri-check-line"></i>No Joining Fees</h4>
          </div>
          <Link href="/contact">
            <button>JOIN NOW</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
