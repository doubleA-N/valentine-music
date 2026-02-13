"use client";

import styles from "@/styles/animations.module.css";

interface LandingHeroProps {
  onStart: () => void;
  isExiting: boolean;
}

export default function LandingHero({ onStart, isExiting }: LandingHeroProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-warm-red overflow-hidden ${
        isExiting ? styles.fadeOut : styles.fadeIn
      }`}
    >
      {/* Colorful overlay blobs on the landing page */}
      <div
        className={`absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-[0.15] ${styles.floatDown}`}
        style={{ background: "radial-gradient(circle, #8DB580 0%, transparent 70%)" }}
      />
      <div
        className={`absolute -top-10 -right-10 w-56 h-56 rounded-full opacity-[0.12] ${styles.floatUp}`}
        style={{ background: "radial-gradient(circle, #6CB4EE 0%, transparent 70%)", animationDelay: "1s" }}
      />
      <div
        className={`absolute bottom-10 -left-10 w-52 h-52 rounded-full opacity-[0.12] ${styles.floatUp}`}
        style={{ background: "radial-gradient(circle, #F4A460 0%, transparent 70%)", animationDelay: "2s" }}
      />
      <div
        className={`absolute -bottom-10 -right-10 w-60 h-60 rounded-full opacity-[0.14] ${styles.floatDown}`}
        style={{ background: "radial-gradient(circle, #F9D949 0%, transparent 70%)", animationDelay: "1.5s" }}
      />
      <div
        className={`absolute top-1/3 right-10 w-40 h-40 rounded-full opacity-[0.10] ${styles.floatDown}`}
        style={{ background: "radial-gradient(circle, #FF87B2 0%, transparent 70%)", animationDelay: "0.5s" }}
      />

      {/* Scattered floating emojis on landing */}
      <span className={`absolute top-[6%] left-[12%] text-2xl ${styles.floatUp} select-none opacity-40`}>💕</span>
      <span className={`absolute top-[10%] right-[15%] text-xl ${styles.floatDown} select-none opacity-40`} style={{ animationDelay: "1s" }}>🌈</span>
      <span className={`absolute top-[20%] left-[80%] text-2xl ${styles.floatUp} select-none opacity-40`} style={{ animationDelay: "2s" }}>⭐</span>
      <span className={`absolute bottom-[15%] left-[18%] text-xl ${styles.floatDown} select-none opacity-40`} style={{ animationDelay: "0.5s" }}>🌸</span>
      <span className={`absolute bottom-[20%] right-[12%] text-xl ${styles.floatUp} select-none opacity-40`} style={{ animationDelay: "1.5s" }}>✨</span>
      <span className={`absolute top-[45%] left-[5%] text-xl ${styles.floatDown} select-none opacity-40`} style={{ animationDelay: "3s" }}>🐾</span>
      <span className={`absolute top-[55%] right-[6%] text-xl ${styles.floatUp} select-none opacity-40`} style={{ animationDelay: "2.5s" }}>❤️</span>
      <span className={`absolute bottom-[30%] left-[45%] text-lg ${styles.floatDown} select-none opacity-35`} style={{ animationDelay: "3.5s" }}>🌼</span>

      {/* Cute pets + icons on top */}
      <div className="flex gap-4 md:gap-6 mb-4 text-3xl md:text-5xl relative z-10">
        <span className={styles.wiggle}>🐱</span>
        <span className={styles.wiggle} style={{ animationDelay: "0.3s" }}>💖</span>
        <span className={styles.wiggle} style={{ animationDelay: "0.5s" }}>🌼</span>
        <span className={styles.wiggle} style={{ animationDelay: "0.8s" }}>💖</span>
        <span className={styles.wiggle} style={{ animationDelay: "1s" }}>🐕</span>
      </div>

      {/* Title — styled like the card */}
      <div className="text-center mb-8 relative z-10">
        <p className="text-2xl md:text-3xl text-cream/90 mb-1 rotate-[-1deg]">
          i
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-cream mb-1 rotate-[-2deg]">
          love
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-soft-yellow mb-2 rotate-[1deg]">
          you
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="text-xl">🌈</span>
          <p className="text-xl md:text-2xl text-cream/80 tracking-widest uppercase">
            my valentine
          </p>
          <span className="text-xl">🌈</span>
        </div>
      </div>

      {/* Decorative elements around button */}
      <div className="relative z-10">
        <span className={`absolute -top-8 -left-12 text-3xl ${styles.floatUp}`}>🐈</span>
        <span className={`absolute -top-8 -right-12 text-3xl ${styles.floatDown}`} style={{ animationDelay: "0.5s" }}>🐶</span>
        <span className={`absolute -bottom-8 -left-8 text-2xl ${styles.floatDown}`} style={{ animationDelay: "1s" }}>⭐</span>
        <span className={`absolute -bottom-8 -right-8 text-2xl ${styles.floatUp}`} style={{ animationDelay: "1.5s" }}>💕</span>

        {/* Main CTA button */}
        <button
          onClick={onStart}
          className={`
            bg-cream text-warm-red font-bold text-xl md:text-2xl
            px-10 py-5 rounded-2xl border-4 border-cozy-brown
            shadow-[4px_4px_0px_0px_#5C3D2E]
            hover:shadow-[6px_6px_0px_0px_#5C3D2E]
            hover:scale-105 active:scale-95
            transition-all duration-200
            ${styles.pulse}
          `}
        >
          💌 Open with Love 💌
        </button>
      </div>

      {/* Bottom row */}
      <p className={`mt-10 text-cream/50 text-sm relative z-10 ${styles.wiggle}`}>
        ~ เค้ารวมเพลงมาให้คับ ~
      </p>

      <div className="flex gap-3 mt-3 text-2xl md:text-3xl relative z-10">
        <span className={styles.floatUp}>😺</span>
        <span className={styles.floatDown} style={{ animationDelay: "0.4s" }}>🌟</span>
        <span className={styles.floatUp} style={{ animationDelay: "0.7s" }}>🐕</span>
        <span className={styles.floatDown} style={{ animationDelay: "1.1s" }}>❤️</span>
        <span className={styles.floatUp} style={{ animationDelay: "1.4s" }}>🐾</span>
      </div>
    </div>
  );
}
