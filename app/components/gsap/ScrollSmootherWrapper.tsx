// app/components/ScrollSmootherWrapper.tsx
'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function ScrollSmootherWrapper({ children }: { children: React.ReactNode }) {
    const smootherRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ScrollSmoother.get()) {
            ScrollSmoother.create({
                smooth: 3,
                effects: true,
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
            });
        }
    }, []);

    return (
        <div id="smooth-wrapper" ref={smootherRef}>
            <div id="smooth-content">{children}</div>
        </div>
    );
}
