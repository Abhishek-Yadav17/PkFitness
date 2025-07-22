import { useEffect } from 'react';
import styles from '../styles/GetStarted.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GetStarted() {
  useEffect(() => {
    if (window.innerWidth <= 767) return;

    gsap.to(`.${styles.arrowPath}`, {
      strokeDashoffset: 0,
      stroke: '#c6ff4f',
      scrollTrigger: {
        trigger: `.${styles.getStarted}`,
        start: 'top 70%',
        end: 'bottom 40%',
        scrub: 1,
      },
    });

    gsap.fromTo(
      `.${styles.left}`,
      { x: -200, y: 200, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: `.${styles.getStarted}`,
          start: 'top 120%',
          end: 'bottom 100%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      `.${styles.right}`,
      { x: 200, y: -200, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: `.${styles.getStarted}`,
          start: 'top 140%',
          end: 'bottom 100%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className={styles.getStarted}>
      <div className={styles.left}>
        <h2>🔥Let&apos;s Get You Started</h2>
        <h2>You don&apos;t need to be “fit” to start—you just need to start.</h2>
        <h2>At PK Fitness and Nutritions, we&apos;re here to support your journey, your way.</h2>
      </div>
      <div className={styles.arrowWrapper}>
        <svg viewBox="0 0 200 100" className={styles.curvedArrow}>
          <defs>
            <marker id="arrowhead" markerWidth="9" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#444" />
            </marker>
          </defs>
          <path d="M1,50 Q110,10 180,40" className={styles.arrowPath} markerEnd="url(#arrowhead)" />
        </svg>
      </div>
      <div className={styles.right}>
        <h3>📲 Book a free consultation today</h3>
        <h3>Let&apos;s build a plan that fits you—not the other way around.</h3>
      </div>
    </div>
  );
}
