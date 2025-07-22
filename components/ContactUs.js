import styles from '../styles/ContactUs.module.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

export default function ContactUs() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://pkbackend-cb1x.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert('Failed to send message');
    }
  };


  useEffect(() => {

    if (window.innerWidth <= 767) return;

    gsap.registerPlugin(ScrollTrigger);

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
  }, []);

  return (
    <section className={styles.contactPage}>
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
                <div onClick={() => window.open('https://www.instagram.com/pkfitnessandnutritions?igsh=MTN1Z2c4NGRrMGh2NQ%3D%3D&utm_source=qr', '_blank')}
                  style={{ cursor: 'pointer' }}><i className="ri-instagram-line"></i></div>
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
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Email</label>
                  <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Subject</label>
                <input type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
