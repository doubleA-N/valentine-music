"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube";
import { songs } from "@/data/songs";
import VinylRecord from "./VinylRecord";
import PlayerControls from "./PlayerControls";
import SongInfo from "./SongInfo";
import styles from "@/styles/animations.module.css";

interface MusicPlayerProps {
  onNavigateToMusicBox?: () => void;
}

export default function MusicPlayer({
  onNavigateToMusicBox,
}: MusicPlayerProps) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);

  const currentSong = songs[currentSongIndex];

  const onReady = useCallback((event: YouTubeEvent) => {
    playerRef.current = event.target;
    // Set volume to 50% to ensure audio is heard
    event.target.setVolume(50);
    event.target.playVideo();
    setIsPlaying(true);
  }, []);

  const onEnd = useCallback(() => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  }, []);

  const onStateChange = useCallback((event: YouTubeEvent<number>) => {
    if (event.data === 1) {
      // Video started playing
      setIsPlaying(true);
    } else if (event.data === 2) {
      setIsPlaying(false);
    }
  }, []);

  const handlePlayPause = useCallback(() => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      playerRef.current.unMute();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const handleNext = useCallback(() => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    // Auto-play the next song if currently playing
    if (isPlaying && playerRef.current) {
      setTimeout(() => {
        playerRef.current?.playVideo();
        playerRef.current?.unMute();
      }, 100);
    }
  }, [isPlaying]);

  const handlePrev = useCallback(() => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    // Auto-play the previous song if currently playing
    if (isPlaying && playerRef.current) {
      setTimeout(() => {
        playerRef.current?.playVideo();
        playerRef.current?.unMute();
      }, 100);
    }
  }, [isPlaying]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-4 py-8 relative z-10 ${styles.fadeIn}`}
    >
      {/* Toggle button to Music Box */}
      {onNavigateToMusicBox && (
        <button
          onClick={onNavigateToMusicBox}
          className="fixed top-4 right-4 z-20 bg-cream text-warm-red px-4 py-2 rounded-xl border-2 border-cozy-brown shadow-[2px_2px_0px_0px_#5C3D2E] hover:shadow-[3px_3px_0px_0px_#5C3D2E] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          🎁 Music Box
        </button>
      )}

      {/* Hidden YouTube player */}
      <div className="absolute w-0 h-0 overflow-hidden">
        <YouTube
          key={currentSong.youtubeId}
          videoId={currentSong.youtubeId}
          opts={{
            height: "1",
            width: "1",
            playerVars: {
              autoplay: 1,
              controls: 0,
              disablekb: 1,
              fs: 0,
              modestbranding: 1,
            },
          }}
          onReady={onReady}
          onEnd={onEnd}
          onStateChange={onStateChange}
        />
      </div>

      {/* Title with cat, dog, hearts, stars */}
      <div className="text-center mb-2">
        <div className="flex items-center justify-center gap-2 md:gap-3 text-2xl md:text-4xl">
          <span className={styles.wiggle}>🐱</span>
          <span className={styles.wiggle} style={{ animationDelay: "0.2s" }}>💖</span>
          <h1 className="font-bold text-warm-red rotate-[-1deg]">
            Our Playlist
          </h1>
          <span className={styles.wiggle} style={{ animationDelay: "0.4s" }}>💖</span>
          <span className={styles.wiggle} style={{ animationDelay: "0.6s" }}>🐶</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-1 text-sm text-cozy-brown/50">
          <span>🌈</span>
          <span>✨</span>
          <span>🌸</span>
          <span>⭐</span>
          <span>🌼</span>
        </div>
      </div>

      {/* Vinyl Record */}
      <VinylRecord
        coverImage={currentSong.coverImage}
        isPlaying={isPlaying}
        songTitle={currentSong.title}
      />

      {/* Song Info */}
      <SongInfo
        title={currentSong.title}
        artist={currentSong.artist}
        currentIndex={currentSongIndex}
        totalSongs={songs.length}
      />

      {/* Controls */}
      <PlayerControls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {/* Decorative bottom */}
      <div className="flex items-center gap-2 mt-8">
        <span className="text-xl">😺</span>
        <span className="text-lg">💕</span>
        <span className="text-lg">🌈</span>
        <p className={`text-cozy-brown/40 text-sm ${styles.wiggle}`}>
          ~ made with love ~
        </p>
        <span className="text-lg">⭐</span>
        <span className="text-lg">💕</span>
        <span className="text-xl">🐕</span>
      </div>
    </div>
  );
}
