"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Configuration Lenis — style contemplatif
    lenisRef.current = new Lenis({
      duration: 1.4, // Scroll lent et luxueux
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out expo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose Lenis to window for external access
    if (typeof window !== "undefined") {
      (window as Window & { lenis?: Lenis }).lenis = lenisRef.current;
    }

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
