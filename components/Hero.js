import { useEffect, useState } from 'react';
import styles from '../styles/Hero.module.scss';
import Link from 'next/link';
import Navbar from './Navbar';
import Image from 'next/image';

export default function HeroSection() {
    const images = ['/bg1.webp', '/bg2.webp', '/bg3.webp', '/bg4.webp', '/bg5.webp'];
    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 767) return;

        const loadGsapAnimations = async () => {
            const gsap = (await import('gsap')).default;
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo(
                `.${styles.tagline} h1 span`,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2 }
            );

            gsap.fromTo(
                `.${styles.tagline} p span`,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2, delay: 0.7 }
            );

            gsap.fromTo(
                `.${styles.tagline} button`,
                { scale: 0.1, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
            );
        };

        loadGsapAnimations();
    }, []);

    return (
        <section className={styles.heroSection} style={{ position: 'relative' }}>
            {images.map((src, index) => (
                <div
                    key={index}
                    className={styles.bgImage}
                    style={{ opacity: index === bgIndex ? 1 : 0 }}
                >
                    <Image
                        src={src}
                        alt="Hero background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        quality={100}
                    />
                </div>
            ))}
            <Navbar />
            <div className={styles.hero}>
                <div className={styles.tagline}>
                    <h1>
                        <span>Your Goals Aren&apos;t Out of Reach—</span><br />
                        <span>You Just Haven&apos;t Trained Here Yet.</span><br />
                        <span>This is Where Your Stronger Self Begins.</span>
                    </h1>
                    <p>
                        <span>At PK Fitness, we go beyond the basics. Experience personalized</span>{' '}
                        <span>training programs, state-of-the-art equipment, and a supportive</span>{' '}
                        <span>community committed to real, lasting results.</span>
                    </p>
                    <Link href="/contact">
                        <button>Start your journey today.</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
