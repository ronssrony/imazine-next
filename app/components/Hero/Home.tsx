'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BiMenu } from 'react-icons/bi';
import styles from './Home.module.css';
import Row from './Row';

gsap.registerPlugin(ScrollTrigger);
gsap.set('.slidesm', { scale: 5 });

export default function Home() {
  const container = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    let clutter = '';
    const para = document.querySelector('.toptext');
    if (!para) return;
    // @ts-ignore
    const characters = para.textContent.split('');
    characters.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    para.innerHTML = clutter;
    gsap.set('.toptext span', { opacity: 0.1 });
    gsap.to('.toptext span', {
      scrollTrigger: {
        trigger: '.home',
        start: 'top 50%',
        end: 'bottom 90%',
        scrub: 1,
      },
      opacity: 1,
      stagger: 0.03,
    });
  }, []);

  useGSAP(() => {
    // Set initial clipPath state for the video - start hidden
    gsap.set(videoRef.current, {
      clipPath: 'circle(100% at 50% 50%)',
      WebkitClipPath: 'circle(100% at 50% 50%)',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.home',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
      },
    });
    // Fixed: animate to circle(100%) to reveal the video
    tl.to(
      videoRef.current,
      {
        clipPath: 'circle(0% at 50% 50%)',
        WebkitClipPath: 'circle(0% at 50% 50%)',
        ease: 'power4.out',
      },
      'start'
    );
    tl.to(
      '.slidesm',
      {
        scale: 1,
        ease: 'power2.out',
      },
      'start'
    );
    tl.to(
      '.lft',
      {
        xPercent: -10,
        stagger: 0.03,
        ease: 'power4.out',
        duration: 1,
      },
      'start'
    );
    tl.to(
      '.rgt',
      {
        xPercent: 10,
        stagger: 0.03,
        ease: 'power4.out',
        duration: 1,
      },
      'start'
    );
  }, { scope: container });

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div ref={container} data-color="black" className="home section w-full h-[200vh] relative">
      <div className="w-full sticky top-0 left-0">
        {/* navbar */}
        <div className="btmtext absolute z-[4] bottom-[4%] left-[25%] text-center sm:text-start sm:bottom-[7%] sm:left-8 w-48 ">
          <h1 className="sm:text-[2vh] font-semibold text-black">
            We build big ideas. Software. Apps. Tools. For real people. Real lives.
          </h1>
        </div>
        {/* video div */}
        <div className={`vdodiv w-full h-screen absolute z-[3] top-0 left-0 overflow-hidden sm:overflow-visible`}>
          <video
            ref={videoRef}
            className="absolute w-full h-screen object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            autoPlay
            loop
            muted
            src="https://videos.pexels.com/video-files/5538137/5538137-hd_1920_1080_25fps.mp4"
            style={{
              WebkitClipPath: 'circle(100% at 50% 50%)',
            }}
          ></video>
        </div>
        {/* marquee div */}
        <div className="marqueecontainer w-full h-screen relative overflow-hidden ">
          {/* top Heading div */}
          <div className="heading absolute top-[12%] sm:top-[7%] left-1/2 -translate-x-1/2 w-72">
            <h2 className="toptext text-[2.2vh] font-[Sansita] tracking-wide font-medium text-center text-black">Crafting a new paradigm of healthcare, one that is</h2>
          </div>
          <div className="slidesm absolute scale-[5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
            <div className="row">
              <Row translateClass="-translate-x-1/2" direction="lft" />
              <Row translateClass="-translate-x-2/3" direction="rgt" />
              <Row translateClass="-translate-x-1/4" direction="lft" />
              <Row translateClass="-translate-x-1/3" direction="rgt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
