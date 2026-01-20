"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { springs } from "@/lib/animations";

type CursorVariant = "default" | "image" | "link" | "text";

export function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isTouch, setIsTouch] = useState(false);

  // Position avec inertie
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Springs pour le mouvement fluide
  const springX = useSpring(cursorX, { stiffness: 500, damping: 50, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 50, mass: 0.5 });

  // Springs pour le cercle extérieur (plus lent)
  const outerX = useSpring(cursorX, { stiffness: 150, damping: 30, mass: 1 });
  const outerY = useSpring(cursorY, { stiffness: 150, damping: 30, mass: 1 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Détecter le type d'élément sous le curseur
      const target = e.target as HTMLElement;
      const cursorType = target.closest("[data-cursor]")?.getAttribute("data-cursor") as CursorVariant | null;

      if (cursorType) {
        setVariant(cursorType);
      } else if (target.closest("a, button")) {
        setVariant("link");
      } else if (target.closest("p, span, h1, h2, h3, h4, h5, h6")) {
        setVariant("text");
      } else {
        setVariant("default");
      }
    },
    [cursorX, cursorY, isVisible]
  );

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Détecter touch device
    if ("ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  // Ne pas afficher sur touch devices
  if (isTouch) return null;

  // Styles selon le variant
  const variants = {
    default: {
      width: 8,
      height: 8,
      backgroundColor: "rgba(26, 26, 26, 0.8)",
      mixBlendMode: "difference" as const,
    },
    image: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      mixBlendMode: "difference" as const,
    },
    link: {
      width: 48,
      height: 48,
      backgroundColor: "transparent",
      border: "1px solid rgba(26, 26, 26, 0.3)",
      mixBlendMode: "normal" as const,
    },
    text: {
      width: 4,
      height: 4,
      backgroundColor: "rgba(26, 26, 26, 0.6)",
      mixBlendMode: "difference" as const,
    },
  };

  return (
    <>
      {/* Cercle principal */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          ...variants[variant],
          opacity: isVisible ? 1 : 0,
        }}
        transition={springs.magnetic}
      />

      {/* Cercle extérieur — seulement sur les images */}
      {variant === "image" && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-white/20"
          style={{
            x: outerX,
            y: outerY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{
            width: 120,
            height: 120,
            opacity: isVisible ? 0.5 : 0,
          }}
          transition={springs.gentle}
        />
      )}

      {/* Label "Voir" sur les images */}
      {variant === "image" && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: 1,
          }}
          transition={springs.smooth}
        >
          <span className="text-xs font-medium tracking-wider text-white uppercase mix-blend-difference">
            Voir
          </span>
        </motion.div>
      )}

      {/* Style global pour cacher le curseur natif */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }

        @media (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
