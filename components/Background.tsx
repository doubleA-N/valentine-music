"use client";

import styles from "@/styles/animations.module.css";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Warm subtle checkerboard */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-conic-gradient(#D94F3F 0% 25%, transparent 0% 50%)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Polka dots */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #A0724A 2px, transparent 2px)`,
          backgroundSize: "60px 60px",
          backgroundPosition: "30px 30px",
        }}
      />

      {/* Green blob - top left */}
      <div
        className={`absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-[0.12] ${styles.floatDown}`}
        style={{
          background: "radial-gradient(circle, #8DB580 0%, transparent 70%)",
        }}
      />

      {/* Blue blob - top right */}
      <div
        className={`absolute -top-10 -right-16 w-64 h-64 md:w-80 md:h-80 rounded-full opacity-[0.10] ${styles.floatUp}`}
        style={{
          background: "radial-gradient(circle, #6CB4EE 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Orange blob - middle right */}
      <div
        className={`absolute top-1/3 -right-10 w-56 h-56 md:w-72 md:h-72 rounded-full opacity-[0.10] ${styles.floatDown}`}
        style={{
          background: "radial-gradient(circle, #F4A460 0%, transparent 70%)",
          animationDelay: "1s",
        }}
      />

      {/* Pink blob - bottom left */}
      <div
        className={`absolute bottom-10 -left-16 w-60 h-60 md:w-80 md:h-80 rounded-full opacity-[0.12] ${styles.floatUp}`}
        style={{
          background: "radial-gradient(circle, #FF87B2 0%, transparent 70%)",
          animationDelay: "3s",
        }}
      />

      {/* Yellow blob - bottom right */}
      <div
        className={`absolute -bottom-10 right-10 w-52 h-52 md:w-64 md:h-64 rounded-full opacity-[0.10] ${styles.floatDown}`}
        style={{
          background: "radial-gradient(circle, #F9D949 0%, transparent 70%)",
          animationDelay: "1.5s",
        }}
      />

      {/* Blue blob - center left */}
      <div
        className={`absolute top-2/3 left-10 w-48 h-48 md:w-60 md:h-60 rounded-full opacity-[0.08] ${styles.floatUp}`}
        style={{
          background: "radial-gradient(circle, #87CEEB 0%, transparent 70%)",
          animationDelay: "2.5s",
        }}
      />

      {/* Green blob - bottom center */}
      <div
        className={`absolute bottom-20 left-1/3 w-44 h-44 md:w-56 md:h-56 rounded-full opacity-[0.09] ${styles.floatDown}`}
        style={{
          background: "radial-gradient(circle, #A8D5A2 0%, transparent 70%)",
          animationDelay: "0.5s",
        }}
      />
    </div>
  );
}
