"use client";

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function PlayerControls({
  isPlaying,
  onPlayPause,
  onNext,
  onPrev,
}: PlayerControlsProps) {
  const buttonBase = `
    w-14 h-14 md:w-16 md:h-16 rounded-full
    border-4 font-bold text-xl md:text-2xl
    flex items-center justify-center
    transition-all duration-200
    hover:scale-110 active:scale-90
  `;

  return (
    <div className="flex items-center justify-center gap-6 my-4">
      {/* Previous */}
      <button
        onClick={onPrev}
        className={`${buttonBase} bg-cream border-cozy-brown text-cozy-brown shadow-[3px_3px_0px_0px_#5C3D2E] hover:shadow-[4px_4px_0px_0px_#5C3D2E]`}
        aria-label="Previous song"
      >
        ⏮
      </button>

      {/* Play/Pause */}
      <button
        onClick={onPlayPause}
        className={`${buttonBase} w-16 h-16 md:w-20 md:h-20 text-2xl md:text-3xl bg-warm-red border-dark-brown text-cream shadow-[4px_4px_0px_0px_#5C3D2E] hover:shadow-[6px_6px_0px_0px_#5C3D2E]`}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? "⏸" : "▶️"}
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        className={`${buttonBase} bg-cream border-cozy-brown text-cozy-brown shadow-[3px_3px_0px_0px_#5C3D2E] hover:shadow-[4px_4px_0px_0px_#5C3D2E]`}
        aria-label="Next song"
      >
        ⏭
      </button>
    </div>
  );
}
