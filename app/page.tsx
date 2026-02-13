"use client";

import { useState } from "react";
import LandingHero from "@/components/LandingHero";
import MusicPlayer from "@/components/MusicPlayer";
import Background from "@/components/Background";
import FloatingDoodles from "@/components/FloatingDoodles";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    setIsExiting(true);
    // Wait for fade-out animation, then show player
    setTimeout(() => {
      setStarted(true);
    }, 600);
  };

  return (
    <main className="min-h-screen relative">
      <Background />
      <FloatingDoodles />

      {!started && (
        <LandingHero onStart={handleStart} isExiting={isExiting} />
      )}

      {started && <MusicPlayer />}
    </main>
  );
}
