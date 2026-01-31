"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RoomTabs } from "./RoomTabs";
import { BudgetWidget } from "./BudgetWidget";
import { RoomProgress } from "./RoomProgress";
import { AIChat } from "./AIChat";
import { IsometricHouse } from "./IsometricHouse";
import { QuickActions } from "./QuickActions";

const rooms = [
  { id: "overview", name: "Vue generale", progress: 72 },
  { id: "living", name: "Salon", progress: 85 },
  { id: "kitchen", name: "Cuisine", progress: 60 },
  { id: "bathroom", name: "Salle de bain", progress: 45 },
  { id: "bedroom", name: "Chambre", progress: 30 },
];

export function RenovateurDashboard() {
  const [activeRoom, setActiveRoom] = useState("overview");
  const [budget, setBudget] = useState(45750);
  const [isChatOpen, setIsChatOpen] = useState(true);

  const currentRoom = rooms.find((r) => r.id === activeRoom) || rooms[0];

  return (
    <div className="renovateur-container">
      {/* Background gradient */}
      <div className="renovateur-bg" />

      {/* Ambient light effects */}
      <div className="ambient-light ambient-light-1" />
      <div className="ambient-light ambient-light-2" />
      <div className="ambient-light ambient-light-3" />

      {/* Header */}
      <header className="renovateur-header">
        <div className="header-left">
          <motion.div
            className="logo-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-name">Renovateur</span>
              <span className="logo-badge">IA</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="header-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <RoomTabs
            rooms={rooms}
            activeRoom={activeRoom}
            onRoomChange={setActiveRoom}
          />
        </motion.div>

        <motion.div
          className="header-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="icon-btn">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          <button className="icon-btn">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="notification-dot" />
          </button>
          <div className="user-avatar">
            <span>JD</span>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="renovateur-main">
        {/* Left Panel - Budget */}
        <motion.div
          className="panel-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <BudgetWidget budget={budget} onChange={setBudget} />
        </motion.div>

        {/* Center - 3D View */}
        <motion.div
          className="panel-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <IsometricHouse activeRoom={activeRoom} rooms={rooms} />

          {/* Room Progress Overlay */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoom}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="room-info-overlay"
            >
              <RoomProgress room={currentRoom} />
            </motion.div>
          </AnimatePresence>

          {/* Title */}
          <motion.div
            className="layout-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="title-line">Layout of</span>
            <span className="title-line title-accent">your home</span>
          </motion.div>
        </motion.div>

        {/* Right Panel - AI Chat */}
        <motion.div
          className="panel-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <AIChat isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
        </motion.div>
      </main>

      {/* Bottom Quick Actions */}
      <motion.div
        className="quick-actions-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <QuickActions />
      </motion.div>

      {/* Powered by */}
      <motion.div
        className="powered-by"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span>Powered by</span>
        <strong>EGB Occitanie</strong>
      </motion.div>
    </div>
  );
}
