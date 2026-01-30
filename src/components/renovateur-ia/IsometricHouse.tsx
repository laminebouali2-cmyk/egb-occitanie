"use client";

import { motion } from "framer-motion";

interface Room {
  id: string;
  name: string;
  progress: number;
}

interface IsometricHouseProps {
  activeRoom: string;
  rooms: Room[];
}

export function IsometricHouse({ activeRoom, rooms }: IsometricHouseProps) {
  const getRoomColor = (roomId: string, progress: number) => {
    const isActive = activeRoom === roomId || activeRoom === "overview";
    const baseOpacity = isActive ? 1 : 0.4;

    if (progress >= 80) return `rgba(74, 222, 128, ${baseOpacity})`;
    if (progress >= 50) return `rgba(190, 242, 100, ${baseOpacity})`;
    if (progress >= 25) return `rgba(250, 204, 21, ${baseOpacity})`;
    return `rgba(251, 146, 60, ${baseOpacity})`;
  };

  return (
    <div className="isometric-house-container">
      {/* SVG Isometric House Illustration */}
      <svg
        viewBox="0 0 800 600"
        className="isometric-house-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definitions */}
        <defs>
          {/* Glassmorphism filter */}
          <filter id="glass" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
          </filter>

          {/* Gradient for walls */}
          <linearGradient id="wallGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>

          {/* Floor gradient */}
          <linearGradient id="floorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>

          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Base platform */}
        <motion.path
          d="M 100 450 L 400 550 L 700 450 L 400 350 Z"
          fill="url(#floorGradient)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Living Room - Front Left */}
        <motion.g
          className={`room-group ${activeRoom === "living" || activeRoom === "overview" ? "active" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Floor */}
          <path
            d="M 150 420 L 300 480 L 400 430 L 250 370 Z"
            fill={getRoomColor("living", 85)}
            opacity="0.6"
          />
          {/* Left wall */}
          <path
            d="M 150 420 L 150 300 L 250 250 L 250 370 Z"
            fill="url(#wallGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          {/* Right wall */}
          <path
            d="M 250 370 L 250 250 L 400 310 L 400 430 Z"
            fill="url(#wallGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          {/* Window */}
          <rect
            x="170"
            y="290"
            width="50"
            height="70"
            fill="rgba(190, 242, 100, 0.3)"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            transform="skewY(25)"
          />
          {/* Furniture - Sofa */}
          <ellipse
            cx="280"
            cy="400"
            rx="40"
            ry="20"
            fill="rgba(255,255,255,0.2)"
            stroke="rgba(255,255,255,0.4)"
          />
        </motion.g>

        {/* Kitchen - Front Right */}
        <motion.g
          className={`room-group ${activeRoom === "kitchen" || activeRoom === "overview" ? "active" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Floor */}
          <path
            d="M 400 430 L 550 490 L 650 440 L 500 380 Z"
            fill={getRoomColor("kitchen", 60)}
            opacity="0.6"
          />
          {/* Left wall */}
          <path
            d="M 400 430 L 400 310 L 500 260 L 500 380 Z"
            fill="url(#wallGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          {/* Right wall */}
          <path
            d="M 500 380 L 500 260 L 650 320 L 650 440 Z"
            fill="url(#wallGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          {/* Kitchen counter */}
          <path
            d="M 520 340 L 620 380 L 620 400 L 520 360 Z"
            fill="rgba(255,255,255,0.15)"
            stroke="rgba(255,255,255,0.4)"
          />
          {/* Sink */}
          <ellipse
            cx="570"
            cy="365"
            rx="15"
            ry="8"
            fill="rgba(190, 242, 100, 0.4)"
            stroke="rgba(255,255,255,0.5)"
          />
        </motion.g>

        {/* Bathroom - Back Right */}
        <motion.g
          className={`room-group ${activeRoom === "bathroom" || activeRoom === "overview" ? "active" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Floor */}
          <path
            d="M 500 300 L 600 340 L 650 310 L 550 270 Z"
            fill={getRoomColor("bathroom", 45)}
            opacity="0.6"
          />
          {/* Left wall */}
          <path
            d="M 500 300 L 500 200 L 550 170 L 550 270 Z"
            fill="url(#wallGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          {/* Back wall */}
          <path
            d="M 550 270 L 550 170 L 650 210 L 650 310 Z"
            fill="url(#wallGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          {/* Bathtub */}
          <ellipse
            cx="580"
            cy="280"
            rx="25"
            ry="12"
            fill="rgba(255,255,255,0.2)"
            stroke="rgba(255,255,255,0.5)"
          />
        </motion.g>

        {/* Bedroom - Back Left */}
        <motion.g
          className={`room-group ${activeRoom === "bedroom" || activeRoom === "overview" ? "active" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Floor */}
          <path
            d="M 250 290 L 380 340 L 450 300 L 320 250 Z"
            fill={getRoomColor("bedroom", 30)}
            opacity="0.6"
          />
          {/* Left wall */}
          <path
            d="M 250 290 L 250 180 L 320 140 L 320 250 Z"
            fill="url(#wallGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          {/* Back wall */}
          <path
            d="M 320 250 L 320 140 L 450 190 L 450 300 Z"
            fill="url(#wallGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          {/* Bed */}
          <rect
            x="340"
            y="240"
            width="60"
            height="35"
            fill="rgba(255,255,255,0.15)"
            stroke="rgba(255,255,255,0.4)"
            transform="skewX(-20)"
          />
        </motion.g>

        {/* Roof outline */}
        <motion.path
          d="M 200 180 L 400 80 L 600 180"
          fill="none"
          stroke="rgba(190, 242, 100, 0.5)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          filter="url(#glow)"
        />

        {/* Room indicators */}
        {rooms.filter(r => r.id !== "overview").map((room, index) => {
          const positions: Record<string, { x: number; y: number }> = {
            living: { x: 250, y: 380 },
            kitchen: { x: 520, y: 420 },
            bathroom: { x: 570, y: 280 },
            bedroom: { x: 360, y: 280 },
          };
          const pos = positions[room.id];
          if (!pos) return null;

          return (
            <motion.g
              key={room.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: activeRoom === room.id || activeRoom === "overview" ? 1 : 0.5,
                scale: 1
              }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <circle
                cx={pos.x}
                cy={pos.y}
                r="20"
                fill="rgba(0,0,0,0.4)"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
              />
              <text
                x={pos.x}
                y={pos.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="600"
              >
                {room.progress}%
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Floating particles effect */}
      <div className="particles-container">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${40 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
