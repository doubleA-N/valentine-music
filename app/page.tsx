"use client";

import { useState } from "react";
import LandingHero from "@/components/LandingHero";
import MusicPlayer from "@/components/MusicPlayer";
import MusicBox from "@/components/MusicBox";
import Background from "@/components/Background";
import FloatingDoodles from "@/components/FloatingDoodles";

type View = "landing" | "player" | "musicBox";

export default function Home() {
  const [currentView, setCurrentView] = useState<View>("landing");
  const [isExiting, setIsExiting] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  const handleStart = () => {
    setAudioUnlocked(true);
    setIsExiting(true);
    // Wait for fade-out animation, then show player
    setTimeout(() => {
      setCurrentView("player");
    }, 600);
  };

  const handleNavigateToMusicBox = () => {
    setCurrentView("musicBox");
  };

  const handleNavigateToPlayer = () => {
    setCurrentView("player");
  };

  return (
    <main className="min-h-screen relative">
      <Background />
      <FloatingDoodles />

      {currentView === "landing" && (
        <LandingHero onStart={handleStart} isExiting={isExiting} />
      )}

      {currentView === "player" && (
        <MusicPlayer onNavigateToMusicBox={handleNavigateToMusicBox} />
      )}

      {currentView === "musicBox" && (
        <MusicBox
          audioUnlocked={audioUnlocked}
          onNavigateToPlayer={handleNavigateToPlayer}
        />
      )}
    </main>
  );
}
