"use client";

import { motion } from "framer-motion";

interface Room {
  id: string;
  name: string;
  progress: number;
}

interface RoomTabsProps {
  rooms: Room[];
  activeRoom: string;
  onRoomChange: (roomId: string) => void;
}

export function RoomTabs({ rooms, activeRoom, onRoomChange }: RoomTabsProps) {
  return (
    <div className="room-tabs">
      {rooms.map((room) => (
        <button
          key={room.id}
          className={`room-tab ${activeRoom === room.id ? "active" : ""}`}
          onClick={() => onRoomChange(room.id)}
        >
          <span>{room.name}</span>
          {activeRoom === room.id && (
            <motion.div
              className="tab-indicator"
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
