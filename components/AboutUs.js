import styles from '../styles/AboutUs.module.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function AboutUs() {

  useEffect(() => {

    if (window.innerWidth <= 767) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      `.${styles.aboutUsIn} h1`,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    );

    gsap.fromTo(
      `.${styles.leftPara} span`,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, delay: 0.5, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      `.${styles.leftPara} .${styles.box}, .${styles.rightPara} .${styles.box}`,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      `.${styles.rightPara} span`,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, delay: 0.8, duration: 1, ease: 'power3.out' }
    );

    ['leftPara', 'rightPara'].forEach((section) => {
      const container = document.querySelector(`.${styles[section]}`);
      const img = container?.querySelector('img');

      if (!container || !img) return;

      container.addEventListener('mouseenter', () => {
        gsap.to(img, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
        });
      });

      container.addEventListener('mouseleave', () => {
        gsap.to(img, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power3.inOut',
        });
      });

      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gsap.to(img, {
          x: x - rect.width / 2,
          y: y - rect.height / 2,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });

    gsap.fromTo(
      `.${styles.aboutList} h1`,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.aboutList}`,
          start: 'top 100%',
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      `.${styles.aboutList} li`,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.aboutList}`,
          scrub: 0.5,
          start: 'top 120%',
        },
      }
    );

    gsap.fromTo(
      `.${styles.aboutDetails} h1`,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.aboutDetails}`,
          scrub: 0.5,
          start: 'top 90%',
        },
      }
    );

    gsap.fromTo(
      `.${styles.point}:nth-child(1)`,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.aboutDetails}`,
          scrub: 0.5,
          start: 'top 90%',
        },
      }
    );

    gsap.fromTo(
      `.${styles.point}:nth-child(2)`,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.aboutDetails}`,
          scrub: 0.5,
          start: 'top 90%',
        },
      }
    );

    gsap.fromTo(
      `.${styles.foundersSection} h1`,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.foundersSection}`,
          start: 'top 100%',
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      `.${styles.highlight}`,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.${styles.foundersSection}`,
          start: 'top 20%',
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <section className={styles.aboutPage}>
      <Navbar />
      <div className={styles.aboutUs}>
        <div className={styles.aboutUsIn}>
          <h1>💬 About Us - Real People. Real Goals. Real Results.</h1>
          <div className={styles.introBlock}>
            <div className={styles.leftPara}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className={styles.box}></div>
              ))}
              <p className={styles.left}>
                <span>At PK Fitness and Nutritions, we&apos;re not here to just give you a workout plan and disappear.</span>
                <span>We&apos;re here to walk with you—step by step—on your fitness journey, no matter where you&apos;re starting from.</span>
              </p>
              <img src='left.jpg' alt='leftPara'></img>
            </div>

            <div className={styles.rightPara}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className={styles.box}></div>
              ))}
              <p className={styles.right}>
                <span>We know how tough it can be to balance work, family, and everything else life throws at you.</span>
                <span>That&apos;s why we focus on realistic, personalized fitness and nutrition coaching that fits your life—not the other way around.</span>
              </p>
              <img src='right.jpg' alt='rightPara'></img>
            </div>
          </div>
        </div>
        <div className={styles.aboutList}>
          <h1>We Work With:</h1>
          <svg viewBox="0 0 200 100" className={styles.curvedArrow}>
            <defs>
              <marker id="arrowhead" markerWidth="9" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#C6FF4F" />
              </marker>
            </defs>
            <path d="M10,10 Q110,90 190,40" className={styles.arrowPath} markerEnd="url(#arrowhead)" />
          </svg>
          <ul className={styles.featuresList}>
            <li>Working professionals who are strapped for time but still want to feel strong and healthy</li>
            <li>Beginners who are just starting out and need a little extra guidance and support</li>
            <li>Bodybuilders and athletes preparing to bring their best to the stage</li>
            <li>Anyone who&apos;s tired of fad diets, extreme routines, or fitness fluff</li>
          </ul>
        </div>
        <div className={styles.aboutDetails}>
          <h1>What Makes Us Different?</h1>
          <div className={styles.differenceContent}>
            <div className={styles.point}>
              <p>
                We actually listen. We ask the right questions, learn about your lifestyle, goals, and struggles,
                and then build a plan that&apos;s realistic, flexible, and made just for you.
                No copy-paste routines. No pressure. Just progress—at your pace.
              </p>
            </div>
            <div className={styles.point}>
              <p>
                We believe that fitness should feel empowering, not exhausting.
                Whether you train at home, at a local gym, or need help with food choices—
                we&apos;re right beside you, cheering you on.
              </p>
            </div>
          </div>
          <p className={styles.tagline}>
            Because at the end of the day, it&apos;s not just about the body you build—it&apos;s about how you feel doing it.
          </p>
        </div>
        <div className={styles.foundersSection}>
          <div className={styles.founders}>
            <h1>Meet the Founders</h1>
            <p>
              PK Fitness & Nutritions was founded by <strong>Pratik Birajdar</strong> and <strong>Kiran Kangude</strong>, two dedicated professionals with over a decade of combined experience in the fitness and nutrition industry. Backed by official certifications and a passion for health, both founders bring a science-based, result-driven approach to every client they work with.
            </p>
            <p>
              At PK Fitness & Nutritions, our entire team is made up of <strong>certified experts</strong> who are <strong>committed to guiding individuals</strong> on their unique wellness journeys.
              From <strong>fat loss</strong> and <strong>muscle gain</strong> to <strong>performance enhancement</strong> and <strong>overall well-being</strong>, we create
              <strong>customized plans</strong> tailored to each client&apos;s <strong>body</strong>, <strong>goals</strong>, and <strong>lifestyle</strong>.
            </p>

          </div>
          <p className={styles.highlight}>
            <strong>PK Fitness & Nutritions</strong> stands for <strong>quality</strong>, <strong>integrity</strong>, and <strong>long-term transformation</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
