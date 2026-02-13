"use client";

import styles from "@/styles/animations.module.css";

const doodles = [
  // Cats & dogs
  { emoji: "🐱", top: "4%", left: "8%", size: "text-2xl", delay: "0s" },
  { emoji: "🐶", top: "12%", left: "88%", size: "text-2xl", delay: "1.2s" },
  { emoji: "🐈", top: "55%", left: "4%", size: "text-xl", delay: "2.5s" },
  { emoji: "🐕", top: "30%", left: "93%", size: "text-2xl", delay: "0.8s" },
  { emoji: "😺", top: "78%", left: "12%", size: "text-xl", delay: "3.2s" },
  { emoji: "🐶", top: "68%", left: "88%", size: "text-xl", delay: "1.8s" },
  { emoji: "🐈‍⬛", top: "42%", left: "6%", size: "text-xl", delay: "0.3s" },
  { emoji: "🐕", top: "88%", left: "52%", size: "text-xl", delay: "2.2s" },

  // Hearts
  { emoji: "❤️", top: "8%", left: "30%", size: "text-xl", delay: "0.5s" },
  { emoji: "💕", top: "22%", left: "75%", size: "text-2xl", delay: "1.5s" },
  { emoji: "💖", top: "65%", left: "70%", size: "text-xl", delay: "2.8s" },
  { emoji: "💗", top: "85%", left: "25%", size: "text-lg", delay: "0.7s" },
  { emoji: "💝", top: "38%", left: "48%", size: "text-lg", delay: "3.8s" },

  // Rainbow & stars
  { emoji: "🌈", top: "18%", left: "55%", size: "text-2xl", delay: "2s" },
  { emoji: "⭐", top: "48%", left: "85%", size: "text-xl", delay: "1s" },
  { emoji: "✨", top: "72%", left: "40%", size: "text-lg", delay: "3.5s" },
  { emoji: "🌟", top: "92%", left: "75%", size: "text-lg", delay: "0.2s" },
  { emoji: "🌈", top: "82%", left: "60%", size: "text-lg", delay: "2.7s" },

  // Flowers & nature
  { emoji: "🌼", top: "15%", left: "42%", size: "text-xl", delay: "1.3s" },
  { emoji: "🌸", top: "58%", left: "55%", size: "text-lg", delay: "0.9s" },
  { emoji: "🌻", top: "35%", left: "15%", size: "text-lg", delay: "3s" },
  { emoji: "🐾", top: "50%", left: "30%", size: "text-lg", delay: "1.7s" },

  // Music & smileys
  { emoji: "🎵", top: "25%", left: "65%", size: "text-lg", delay: "2.3s" },
  { emoji: "🎶", top: "75%", left: "92%", size: "text-lg", delay: "0.4s" },
  { emoji: "😊", top: "45%", left: "72%", size: "text-lg", delay: "3.3s" },
];

export default function FloatingDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {doodles.map((d, i) => (
        <span
          key={i}
          className={`absolute ${d.size} ${i % 2 === 0 ? styles.floatUp : styles.floatDown} select-none`}
          style={{
            top: d.top,
            left: d.left,
            animationDelay: d.delay,
            opacity: 0.45,
          }}
        >
          {d.emoji}
        </span>
      ))}
    </div>
  );
}
