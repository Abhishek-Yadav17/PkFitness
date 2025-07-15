import styles from '../styles/ContactUs.module.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function ContactUs() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
      const scrollEl = document.querySelector('[data-scroll-section]');
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
        `.${styles.aboutUsIn} h1`,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        }
      );

      gsap.fromTo(
        `.${styles.leftPara} span`,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.5,
          duration: 1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        `.${styles.leftPara} .${styles.box}, .${styles.rightPara} .${styles.box}`,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        `.${styles.rightPara} span`,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.8,
          duration: 1,
          ease: 'power3.out',
        }
      );

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
            scroller: scrollEl,
            start: 'top 100%',
            scrub: 0.5
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
            scroller: scrollEl,
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
            scroller: scrollEl,
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
            scroller: scrollEl,
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
            scroller: scrollEl,
            scrub: 0.5,
            start: 'top 90%',
          },
        }
      );

      gsap.fromTo(
        `.${styles.contactContainer}>h1`,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${styles.contactContainer}`,
            scroller: scrollEl,
            scrub: 0.5,
            start: 'top 120%',
            end: 'bottom 80%',
          },
        }
      );

      gsap.fromTo(
        `.${styles.blueBoxes} p`,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: `.${styles.contactContainer}`,
            scroller: scrollEl,
            start: 'top 120%',
            end: 'bottom 80%',
          },
        }
      );
      
      gsap.fromTo(
        `.${styles.formLeft}`,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: `.${styles.contactContainer}`,
            scroller: scrollEl,
            start: 'top 120%',
            scrub: 1,
            end: 'bottom 80%',
          },
        }
      );
      
      gsap.fromTo(
        `.${styles.formRight}`,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: `.${styles.contactContainer}`,
            scroller: scrollEl,
            start: 'top 90%',
            end: 'bottom 80%',
            scrub: 1
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.contactPage} data-scroll-section>
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
                <span>At PK Fitness and Nutrition, we&apos;re not here to just give you a workout plan and disappear.</span>
                <span>We&apos;re here to walk with you—step by step—on your fitness journey, no matter where you&apos;re starting from.</span>
              </p>
            </div>

            <div className={styles.rightPara}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className={styles.box}></div>
              ))}
              <p className={styles.right}>
                <span>We know how tough it can be to balance work, family, and everything else life throws at you.</span>
                <span>That&apos;s why we focus on realistic, personalized fitness and nutrition coaching that fits your life—not the other way around.</span>
              </p>
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
      </div>
      <div className={styles.contactContainer}>
        <h1>Thinking about getting started but not sure where to begin?</h1>
        <div className={styles.blueBoxes}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles.box}></div>
          ))}
          <p>Whether you&apos;re ready to dive in or just want to understand your options, we&apos;re just a call or message away.</p>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.formLeft}>
            <div className={styles.formLeftTop}>
              <h1>Contact Form</h1>
              <h4>Fill out the form below and one of our friendly team member will get back to you shortly</h4>
            </div>
            <div className={styles.formLeftMid}>
              <h5>Follow Us on Social Media</h5>
              <div className={styles.socialIcons}>
                <div><i className="ri-facebook-fill"></i></div>
                <div><i className="ri-twitter-x-line"></i></div>
                <div><i className="ri-instagram-line"></i></div>
              </div>
            </div>
            <div className={styles.formLeftBottom}>
              <div className={styles.infoBox}>
                <div>
                  <p>You can email us here</p>
                  <span>info@example.com</span>
                </div>
                <i class="ri-arrow-right-up-line"></i>
              </div>
              <div className={styles.infoBox}>
                <div>
                  <p>Give us a call on</p>
                  <span>+91 88900 99108</span>
                </div>
                <i class="ri-arrow-right-up-line"></i>
              </div>
              <div className={styles.infoBox}>
                <div>
                  <p>Our office hours</p>
                  <span>Mon-Fri, 9am-5pm</span>
                </div>
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </div>
          </div>
          <div className={styles.formRight}>
            <form className={styles.form}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Email</label>
                  <input type="email" placeholder="Email" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Phone Number" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Subject</label>
                <input type="text" placeholder="Subject" />
              </div>

              <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea placeholder="Message"></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
