import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useLocomotive() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
      if (!scrollRef.current) return;

      const locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      ScrollTrigger.scrollerProxy(scrollRef.current, {
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
        pinType: getComputedStyle(scrollRef.current).transform !== 'none' ? 'transform' : 'fixed',
      });

      locoScroll.on('scroll', ScrollTrigger.update);
      ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
      ScrollTrigger.refresh();

      return () => {
        if (locoScroll) locoScroll.destroy();
        ScrollTrigger.removeEventListener('refresh', () => locoScroll.update());
      };
    });
  }, []);

  return scrollRef;
}
