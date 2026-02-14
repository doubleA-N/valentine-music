"use client";

import { useState, useRef, useEffect } from "react";
import styles from "@/styles/animations.module.css";

interface MusicBoxProps {
  audioUnlocked: boolean;
  onNavigateToPlayer: () => void;
}

export default function MusicBox({
  audioUnlocked,
  onNavigateToPlayer,
}: MusicBoxProps) {
  // State
  const [isDragging, setIsDragging] = useState(false);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [lastAngle, setLastAngle] = useState(0);

  // Refs
  const audioRef = useRef<HTMLAudioElement>(null);
  const vinylRef = useRef<HTMLDivElement>(null);

  // Calculate angle using atan2
  const calculateAngle = (clientX: number, clientY: number): number => {
    if (!vinylRef.current) return 0;
    const rect = vinylRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const radians = Math.atan2(clientY - centerY, clientX - centerX);
    return radians * (180 / Math.PI);
  };

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastAngle(calculateAngle(e.clientX, e.clientY));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !audioRef.current) return;
    const angle = calculateAngle(e.clientX, e.clientY);
    const angleDelta = angle - lastAngle;
    setCurrentAngle((prev) => prev + angleDelta);
    setLastAngle(angle);

    // Play audio if paused
    if (audioRef.current.paused) {
      audioRef.current.play().catch((err) => {
        console.error("Audio playback failed:", err);
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setLastAngle(calculateAngle(touch.clientX, touch.clientY));
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !audioRef.current) return;
    e.preventDefault(); // Prevent scrolling while dragging
    const touch = e.touches[0];
    const angle = calculateAngle(touch.clientX, touch.clientY);
    const angleDelta = angle - lastAngle;
    setCurrentAngle((prev) => prev + angleDelta);
    setLastAngle(angle);

    // Play audio if paused
    if (audioRef.current.paused) {
      audioRef.current.play().catch((err) => {
        console.error("Audio playback failed:", err);
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  // Event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, lastAngle]);

  // Unlock audio on iOS
  useEffect(() => {
    if (audioUnlocked && audioRef.current) {
      audioRef.current.load();
    }
  }, [audioUnlocked]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-4 py-8 relative z-10 ${styles.fadeIn}`}
    >
      {/* Toggle Button */}
      <button
        onClick={onNavigateToPlayer}
        className="fixed top-4 left-4 z-20 bg-cream text-warm-red px-4 py-2 rounded-xl border-2 border-cozy-brown shadow-[2px_2px_0px_0px_#5C3D2E] hover:shadow-[3px_3px_0px_0px_#5C3D2E] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        🎵 Back to Songs
      </button>

      {/* Title with decorative elements */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 md:gap-3 text-2xl md:text-4xl mb-2">
          <span className={styles.wiggle}>🎁</span>
          <span className={styles.wiggle} style={{ animationDelay: "0.2s" }}>
            💝
          </span>
          <h1 className="font-bold text-warm-red rotate-[-1deg]">Music Box</h1>
          <span className={styles.wiggle} style={{ animationDelay: "0.4s" }}>
            💝
          </span>
          <span className={styles.wiggle} style={{ animationDelay: "0.6s" }}>
            🎁
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-1 text-sm text-cozy-brown/50">
          <span>🌸</span>
          <span>✨</span>
          <span>💖</span>
          <span>⭐</span>
          <span>🌼</span>
        </div>
      </div>

      {/* Wind-Up Music Box */}
      <div className="mb-6 relative">
        {/* Music Box Base (Stationary) */}
        <div className="relative w-72 h-48 md:w-80 md:h-56 rounded-2xl overflow-hidden select-none">
          {/* Wood grain background */}
          <div
            className="absolute inset-0 border-4 border-dark-brown shadow-[6px_6px_0px_0px_#5C3D2E] rounded-2xl"
            style={{
              background: `
                linear-gradient(90deg,
                  #8B6339 0%,
                  #A0724A 15%,
                  #8B6339 30%,
                  #C4956B 45%,
                  #A0724A 60%,
                  #8B6339 75%,
                  #A0724A 90%,
                  #8B6339 100%
                )
              `,
            }}
          >
            {/* Wood grain texture overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(92, 61, 46, 0.3) 2px,
                  rgba(92, 61, 46, 0.3) 4px
                )`,
              }}
            />

            {/* Decorative corner brackets */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-warm-red rounded-tl-md" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-warm-red rounded-tr-md" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-warm-red rounded-bl-md" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-warm-red rounded-br-md" />

            {/* Keyhole in center */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="relative w-8 h-8 rounded-full bg-dark-brown border-4 border-cozy-brown shadow-inner">
                {/* Keyhole slot */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-4 bg-dark-brown rounded-b-sm" />

                {/* Keyhole icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs">🔓</span>
                </div>
              </div>
            </div>

            {/* Label text on box */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center">
              <p className="text-cream/80 text-sm md:text-base font-bold tracking-wider">
                ♫ MUSIC BOX ♫
              </p>
            </div>
          </div>

          {/* Outer doodle border */}
          <div className="absolute -inset-3 rounded-2xl border-4 border-dashed border-warm-coral opacity-30" />
        </div>

        {/* Wind-Up Key (Rotating) - Positioned on top of the box */}
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 z-10"
          ref={vinylRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{
            transform: `translateX(-50%) rotate(${currentAngle}deg)`,
            transformOrigin: "center bottom",
            transition: isDragging ? "none" : "transform 0.3s ease-out",
            cursor: isDragging ? "grabbing" : "grab",
            touchAction: "none",
          }}
        >
          {/* Key Bow (Handle) */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-1">
            {/* Main circular handle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-warm-red to-warm-coral border-4 border-warm-red shadow-lg">
              {/* Inner decorative ring */}
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-cream/40" />

              {/* Center icon - Vintage Key */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl md:text-4xl">🗝️</span>
              </div>
            </div>

            {/* Outer glow */}
            <div className="absolute -inset-1 rounded-full border-2 border-warm-coral/40 blur-sm" />
          </div>

          {/* Key Shaft (Short stem that connects to box) */}
          <div className="relative w-3 h-8 mx-auto bg-gradient-to-b from-warm-coral to-cozy-brown border-2 border-dark-brown rounded-sm shadow-md" />

          {/* Pivot point indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-dark-brown border border-cozy-brown" />
        </div>
      </div>

      {/* Instructions */}
      <p className="text-cozy-brown/60 text-sm md:text-base text-center mb-4">
        ~ ลองหมุนกุญแจดูสิ มีอะไรเซอไพร์ส! ~
      </p>

      {/* Decorative bottom */}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-xl">🗝️</span>
        <span className="text-lg">💕</span>
        <span className="text-lg">🎶</span>
        <p className={`text-cozy-brown/40 text-sm ${styles.wiggle}`}>
          ~ wind up the music box ~
        </p>
        <span className="text-lg">🎶</span>
        <span className="text-lg">💕</span>
        <span className="text-xl">🗝️</span>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/music-box-audio.m4a" preload="auto" loop />
    </div>
  );
}
