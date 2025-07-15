import styles from '../styles/Homepage.module.scss';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Homepage() {

  const images = ['/bg1.jpg', '/bg2.jpg', '/bg3.jpg', '/bg4.jpg', '/bg5.jpg'];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
      const scrollEl = document.querySelector('[data-scroll-container]');
      if (!scrollEl) return;

      const locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
      });

      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: getComputedStyle(scrollEl).transform !== 'none' ? 'transform' : 'fixed',
      });

      locoScroll.on('scroll', ScrollTrigger.update);

      gsap.fromTo(
        `.${styles.tagline} h1 span`,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        }
      );

      gsap.fromTo(
        `.${styles.tagline} p span`,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.7
        }
      );

      gsap.fromTo(
        `.${styles.tagline} button`,
        { scale: 0.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out'
        }
      );

      gsap.fromTo(
        `.${styles.rotated} h1:nth-child(1), .${styles.rotated} h1:nth-child(3)`,
        { x: -400 },
        {
          x: 400,
          opacity: 1,
          scrollTrigger: {
            trigger: `.${styles.aboutSection}`,
            scroller: scrollEl,
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
            scroller: scrollEl,
            start: 'top 160%',
            end: 'bottom 50%',
            scrub: 2,
          },
        }
      );

      gsap.to(`.${styles.arrowPath}`, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: `.${styles.getStarted}`,
          scroller: scrollEl,
          start: 'top 70%',
          end: 'bottom 40%',
          scrub: 1,
        },
        stroke: '#c6ff4f',
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
            scroller: scrollEl,
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
            scroller: scrollEl,
            start: 'top 140%',
            end: 'bottom 100%',
            scrub: 1,
          },
        }
      );

    });
  }, []);

  return (
    <>
      <section className={styles.homepage} data-scroll-section style={{ backgroundImage: `url(${images[bgIndex]})` }}>
        <Navbar />
        <div className={styles.hero}>
          <div className={styles.tagline} data-scroll data-scroll-speed="4">
            <h1><span>Your Goals Aren&apos;t Out of Reach—</span><br />
              <span>You Just Haven&apos;t Trained Here Yet.</span><br />
              <span>This is Where Your Stronger Self Begins.</span>
            </h1>
            <p>
              <span>At PK Fitness, we go beyond the basics. Experience personalized</span> <span>training programs, state-of-the-art equipment, and a supportive</span> <span>community committed to real, lasting results.</span>
            </p>
            <button>Start your journey today.</button>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection} data-scroll-section>
        <div className={styles.rotated}>
          <h1>MORE ABOUT</h1>
          <h1>PK FITNESS</h1>
          <h1>& NUTRITION</h1>
        </div>
        <div className={styles.aboutDetails}>
          <div className={styles.details}>
            <img src='/about1.jpg' alt='details' />
            <span className={styles.imageLabel} data-scroll data-scroll-speed="2">01</span>
            <div className={styles.detailsInner} data-scroll data-scroll-speed="4">
              <h2>💻 Online Coaching (Remote)</h2>
              <h4>Perfect for busy professionals and remote workers.</h4>
              <h5>If you&apos;re tied to a desk or have a packed schedule, we&apos;ve got your back. Our online coaching is flexible, structured, and tailored just for you.</h5>
              <ul>
                <li><i class="ri-checkbox-circle-line"></i>Weekly workout plans that evolve with your progress</li>
                <li><i class="ri-checkbox-circle-line"></i>1-on-1 check-ins to keep you on track</li>
                <li><i class="ri-checkbox-circle-line"></i>Easy-to-follow nutrition guidance</li>
                <li><i class="ri-checkbox-circle-line"></i>Delivered via WhatsApp, Google Sheets, or Trainerize—whatever works best for you.</li>
              </ul>
            </div>
          </div>
          <div className={styles.details}>
            <span className={styles.imageLabel} data-scroll data-scroll-speed="2">02</span>
            <div className={styles.detailsInner} data-scroll data-scroll-speed="4">
              <h2>🏋‍♂ Offline Personal Training (We Come to You)</h2>
              <h4>Don&apos;t want to switch gyms? No problem.</h4>
              <h5>Whether you&apos;re already training somewhere or need help picking the right place—we&apos;ll meet you where you are.</h5>
              <ul>
                <li><i class="ri-checkbox-circle-line"></i>Personalized sessions at your gym or one nearby.</li>
                <li><i class="ri-checkbox-circle-line"></i>Flexible plans: 2, 3, or 5 sessions a week.</li>
                <li><i class="ri-checkbox-circle-line"></i>Face-to-face coaching + full nutrition support.</li>
                <li><i class="ri-checkbox-circle-line"></i>You show up—we&apos;ll handle the rest.</li>
              </ul>
            </div>
            <img src='/about2.jpg' alt='details' />
          </div>
          <div className={styles.details}>
            <img src='/about3.jpg' alt='details' />
            <span className={styles.imageLabel} data-scroll data-scroll-speed="2">03</span>
            <div className={styles.detailsInner} data-scroll data-scroll-speed="4">
              <h2>💪 Bodybuilding Prep (Stage-Ready Coaching)</h2>
              <h4>From first-timers to seasoned athletes—this is your spotlight.</h4>
              <h5>Getting stage-ready isn&apos;t just about lifting—it&apos;s about strategy, structure, and confidence. We&apos;ll help you build the body and the mindset.</h5>
              <ul>
                <li><i class="ri-checkbox-circle-line"></i>Full prep coaching: workouts, diet, posing, and peak week.</li>
                <li><i class="ri-checkbox-circle-line"></i>Online and offline options for every lifestyle.</li>
                <li><i class="ri-checkbox-circle-line"></i>Proven methods, personalized to your body.</li>
                <li><i class="ri-checkbox-circle-line"></i>Built for results—and built around you.</li>
              </ul>
            </div>
          </div>
          <div className={styles.details}>
            <span className={styles.imageLabel} data-scroll data-scroll-speed="2">04</span>
            <div className={styles.detailsInner} data-scroll data-scroll-speed="4">
              <h2>🏠 Home & Society Gym Training</h2>
              <h4>Why go to the gym when the gym can come to you?</h4>
              <h5>Train in the comfort of your own space, without compromising on results.</h5>
              <ul>
                <li><i class="ri-checkbox-circle-line"></i>1-on-1 personal training at your home or society gym.</li>
                <li><i class="ri-checkbox-circle-line"></i>No commute, no crowds—just convenience.</li>
                <li><i class="ri-checkbox-circle-line"></i>Custom workouts + continuous nutrition support.</li>
                <li><i class="ri-checkbox-circle-line"></i>Perfect for beginners, parents, and busy professionals.</li>
              </ul>
            </div>
            <img src='/about4.jpg' alt='details' />
          </div>
          <div className={styles.details}>
            <img src='/about5.jpg' alt='details' />
            <span className={styles.imageLabel} data-scroll data-scroll-speed="2">05</span>
            <div className={styles.detailsInner} data-scroll data-scroll-speed="4">
              <h2>🥗 Nutrition Guidance (Included in All Plans)</h2>
              <h4>No crash diets, no cookie-cutter meal plans. Just food that fits your life.</h4>
              <h5>We&apos;ll help you eat better—not less—with plans designed around your preferences, goals, and lifestyle.</h5>
              <ul>
                <li><i class="ri-checkbox-circle-line"></i>Flexible meal plans tailored to you.</li>
                <li><i class="ri-checkbox-circle-line"></i>Ongoing tweaks based on your progress.</li>
                <li><i class="ri-checkbox-circle-line"></i>Simple, sustainable habits that stick.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.getStarted}>
          <div className={styles.left}>
            <h2>🔥Let&apos;s Get You Started</h2>
            <h2>You don&apos;t need to be “fit” to start—you just need to start.</h2>
            <h2>At PK Fitness and Nutrition, we&apos;re here to support your journey, your way.</h2>
          </div>
          <div className={styles.arrowWrapper}>
            <svg viewBox="0 0 200 100" className={styles.curvedArrow}>
              <defs>
                <marker id="arrowhead" markerWidth="9" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#444" />
                </marker>
              </defs>
              <path d="M1,50 Q110,10 180,40" className={styles.arrowPath} marker-end="url(#arrowhead)" />
            </svg>
          </div>
          <div className={styles.right}>
            <h3>📲 Book a free consultation today</h3>
            <h3>Let&apos;s build a plan that fits you—not the other way around.</h3>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection} data-scroll-section>
        <h1>MEMBERSHIPS</h1>
        <div className={styles.plans}>
          <div className={styles.card}>
            <div className={styles.planDetails}>
              <h2>Plan 1</h2>
              <img src='/plan2.webp' alt='plan1' />
              <h2><span>$200</span> / month</h2>
            </div>
            <div className={styles.planList}>
              <h4><i class="ri-check-line"></i>12 Classes Per Month</h4>
              <h4><i class="ri-check-line"></i>3 Classes Per Week</h4>
              <h4><i class="ri-check-line"></i>No Joining Fees</h4>
            </div>
            <button>JOIN NOW</button>
          </div>
          <div className={`${styles.card} ${styles.featured}`}>
            <div className={styles.planDetails}>
              <h2>Plan 2</h2>
              <img src='/plan2.webp' alt='plan1' />
              <h2><span>$200</span> / month</h2>
            </div>
            <div className={styles.planList}>
              <h4><i class="ri-check-line"></i>12 Classes Per Month</h4>
              <h4><i class="ri-check-line"></i>3 Classes Per Week</h4>
              <h4><i class="ri-check-line"></i>No Joining Fees</h4>
            </div>
            <button>JOIN NOW</button>
          </div>
          <div className={styles.card}>
            <div className={styles.planDetails}>
              <h2>Plan 3</h2>
              <img src='/plan2.webp' alt='plan1' />
              <h2><span>$200</span> / month</h2>
            </div>
            <div className={styles.planList}>
              <h4><i class="ri-check-line"></i>12 Classes Per Month</h4>
              <h4><i class="ri-check-line"></i>3 Classes Per Week</h4>
              <h4><i class="ri-check-line"></i>No Joining Fees</h4>
            </div>
            <button>JOIN NOW</button>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
