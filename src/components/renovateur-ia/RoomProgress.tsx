"use client";

import { motion } from "framer-motion";

interface Room {
  id: string;
  name: string;
  progress: number;
}

interface RoomProgressProps {
  room: Room;
}

export function RoomProgress({ room }: RoomProgressProps) {
  const getStatusColor = (progress: number) => {
    if (progress >= 80) return "var(--accent-green)";
    if (progress >= 50) return "var(--accent-lime)";
    if (progress >= 25) return "var(--accent-yellow)";
    return "var(--accent-orange)";
  };

  const getStatusText = (progress: number) => {
    if (progress >= 80) return "Presque termine";
    if (progress >= 50) return "En cours";
    if (progress >= 25) return "En progression";
    return "A demarrer";
  };

  return (
    <motion.div
      className="glass-card room-progress-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="room-progress-header">
        <div className="room-progress-icon" style={{ backgroundColor: getStatusColor(room.progress) }}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" fill="currentColor"/>
          </svg>
        </div>
        <div className="room-progress-info">
          <span className="room-progress-name">{room.name}</span>
          <span className="room-progress-status">{getStatusText(room.progress)}</span>
        </div>
      </div>

      <div className="room-progress-circle">
        <svg viewBox="0 0 100 100" className="progress-svg">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={getStatusColor(room.progress)}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={251.2}
            initial={{ strokeDashoffset: 251.2 }}
            animate={{ strokeDashoffset: 251.2 - (251.2 * room.progress) / 100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
          />
        </svg>
        <div className="progress-value">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {room.progress}%
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
