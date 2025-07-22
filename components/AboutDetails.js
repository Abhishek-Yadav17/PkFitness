import styles from '../styles/AboutDetails.module.scss';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function AboutDetails() {
  // useEffect(() => {
  //   if (window.innerWidth <= 767) return;

  //   gsap.utils.toArray(`.${styles.details}`).forEach((detail, i) => {
  //     const img = detail.querySelector('img');
  //     const span = detail.querySelector(`.${styles.imageLabel}`);
  //     const textElements = detail.querySelectorAll(
  //       `.${styles.detailsInner} h2, .${styles.detailsInner} h4, .${styles.detailsInner} h5, .${styles.detailsInner} ul`
  //     );

  //     gsap.fromTo(
  //       img,
  //       { x: i % 2 === 0 ? -150 : 150, opacity: 0 },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         scrollTrigger: {
  //           trigger: detail,
  //           start: 'top 160%',
  //           scrub: 1,
  //         },
  //         duration: 1,
  //         ease: 'power3.out',
  //       }
  //     );

  //     gsap.fromTo(
  //       span,
  //       { y: 100, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         scrollTrigger: {
  //           trigger: detail,
  //           start: 'top 160%',
  //           scrub: 1,
  //         },
  //         duration: 1,
  //         delay: 0.2,
  //         ease: 'power3.out',
  //       }
  //     );

  //     gsap.fromTo(
  //       textElements,
  //       { y: 100, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         stagger: 0.15,
  //         scrollTrigger: {
  //           trigger: detail,
  //           start: 'top 90%',
  //         },
  //         duration: 1,
  //         ease: 'power3.out',
  //       }
  //     );
  //   });
  // }, []);

  return (
    <div className={styles.aboutDetails}>
      {[
        {
          index: '01',
          title: '💻 Online Coaching (Remote)',
          subtitle: 'Perfect for busy professionals and remote workers.',
          desc: `If you're tied to a desk or have a packed schedule, we've got your back.`,
          points: [
            'Weekly workout plans that evolve with your progress',
            '1-on-1 check-ins to keep you on track',
            'Easy-to-follow nutrition guidance',
            'Delivered via WhatsApp, Google Sheets, or Trainerize—whatever works best for you.',
          ],
          image: '/about1.webp',
          reverse: false,
        },
        {
          index: '02',
          title: '🏋‍♂ Offline Personal Training (We Come to You)',
          subtitle: "Don't want to switch gyms? No problem.",
          desc: `We'll meet you where you are.`,
          points: [
            'Personalized sessions at your gym or one nearby.',
            'Flexible plans: 2, 3, or 5 sessions a week.',
            'Face-to-face coaching + full nutrition support.',
            "You show up—we'll handle the rest.",
          ],
          image: '/about2.webp',
          reverse: true,
        },
        {
          index: '03',
          title: '💪 Bodybuilding Prep (Stage-Ready Coaching)',
          subtitle: 'From first-timers to seasoned athletes—this is your spotlight.',
          desc: `We'll help you build the body and the mindset.`,
          points: [
            'Full prep coaching: workouts, diet, posing, and peak week.',
            'Online and offline options for every lifestyle.',
            'Proven methods, personalized to your body.',
            'Built for results—and built around you.',
          ],
          image: '/about3.webp',
          reverse: false,
        },
        {
          index: '04',
          title: '🏠 Home & Society Gym Training',
          subtitle: 'Why go to the gym when the gym can come to you?',
          desc: `Train in the comfort of your own space.`,
          points: [
            '1-on-1 personal training at your home or society gym.',
            'No commute, no crowds—just convenience.',
            'Custom workouts + continuous nutrition support.',
            'Perfect for beginners, parents, and busy professionals.',
          ],
          image: '/about4.webp',
          reverse: true,
        },
        {
          index: '05',
          title: '🥗 Nutrition Guidance (Included in All Plans)',
          subtitle: 'No crash diets, no cookie-cutter meal plans.',
          desc: `We'll help you eat better—not less.`,
          points: [
            'Flexible meal plans tailored to you.',
            'Ongoing tweaks based on your progress.',
            'Simple, sustainable habits that stick.',
          ],
          image: '/about5.webp',
          reverse: false,
        },
      ].map((item, idx) => (
        <div className={styles.details} key={idx}>
          {!item.reverse && (
            <Image
              src={item.image}
              alt="details"
              width={500} 
              height={300}
              loading="lazy"
            />
          )}
          <span className={styles.imageLabel}>{item.index}</span>
          <div className={styles.detailsInner}>
            <h2>{item.title}</h2>
            <h4>{item.subtitle}</h4>
            <h5>{item.desc}</h5>
            <ul>
              {item.points.map((point, i) => (
                <li key={i}><i className="ri-checkbox-circle-line"></i>{point}</li>
              ))}
            </ul>
          </div>
          {item.reverse && (
            <Image
              src={item.image}
              alt="details"
              width={500}
              height={300}
              loading="lazy"
            />
          )}
        </div>
      ))}
    </div>
  );
}
