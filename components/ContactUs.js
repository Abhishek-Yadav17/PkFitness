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
        `.${styles.contactContainer}>h1`,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
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
        }
      );
    });
  }, []);

  return (
    <section className={styles.contactPage} data-scroll-section>
      <Navbar />
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
                  <span>info@pkfitnessandnutritions.com</span>
                </div>
                <i class="ri-arrow-right-up-line"></i>
              </div>
              <div className={styles.infoBox}>
                <div>
                  <p>Give us a call on</p>
                  <span>+91 9284003863</span>
                </div>
                <i class="ri-arrow-right-up-line"></i>
              </div>
              <div className={styles.infoBox}>
                <div>
                  <p>Our office hours</p>
                  <span>Mon-Fri, 6am-6pm</span>
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
