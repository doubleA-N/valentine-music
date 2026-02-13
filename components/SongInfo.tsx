"use client";

import styles from "@/styles/animations.module.css";

interface SongInfoProps {
  title: string;
  artist: string;
  currentIndex: number;
  totalSongs: number;
}

export default function SongInfo({
  title,
  artist,
  currentIndex,
  totalSongs,
}: SongInfoProps) {
  return (
    <div className={`text-center my-4 ${styles.fadeIn}`} key={title}>
      <h2 className="text-2xl md:text-3xl font-bold text-dark-brown rotate-[-1deg]">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-warm-red mt-1 rotate-[0.5deg]">
        {artist}
      </p>
      <p className="text-sm text-cozy-brown/50 mt-2">
        🐾 {currentIndex + 1} / {totalSongs} 🐾
      </p>
    </div>
  );
}
