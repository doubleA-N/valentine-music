"use client";

import styles from "@/styles/animations.module.css";

interface VinylRecordProps {
  coverImage: string;
  isPlaying: boolean;
  songTitle: string;
}

export default function VinylRecord({
  coverImage,
  isPlaying,
  songTitle,
}: VinylRecordProps) {
  return (
    <div className="flex items-center justify-center my-6">
      <div
        className={`relative w-56 h-56 md:w-72 md:h-72 rounded-full ${
          isPlaying ? styles.spin : styles.spinPaused
        }`}
      >
        {/* Vinyl grooves */}
        <div
          className="absolute inset-0 rounded-full border-4 border-dark-brown bg-dark-brown"
          style={{
            boxShadow: `
              inset 0 0 0 8px #5C3D2E,
              inset 0 0 0 10px #7a5540,
              inset 0 0 0 20px #5C3D2E,
              inset 0 0 0 22px #6b4a38,
              inset 0 0 0 32px #5C3D2E,
              inset 0 0 0 34px #7a5540,
              inset 0 0 0 44px #5C3D2E,
              inset 0 0 0 46px #6b4a38,
              inset 0 0 0 56px #5C3D2E,
              inset 0 0 0 58px #7a5540,
              inset 0 0 0 68px #5C3D2E,
              inset 0 0 0 70px #6b4a38
            `,
          }}
        />

        {/* Center label with cover photo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-warm-red shadow-lg z-10 bg-warm-red">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={coverImage}
              alt={songTitle}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#D94F3F] to-[#A0724A] text-4xl">🐱</div>`;
                }
              }}
            />
          </div>
        </div>

        {/* Center spindle hole */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-3 h-3 rounded-full bg-dark-brown border border-cozy-brown" />
        </div>

        {/* Doodle border ring */}
        <div className="absolute -inset-2 rounded-full border-4 border-dashed border-warm-coral opacity-40" />
      </div>
    </div>
  );
}
