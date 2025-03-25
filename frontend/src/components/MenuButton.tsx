import React from "react";
// import { MenuIcon } from "./MenuIcon";

interface MenuButtonProps {
  onClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="position-fixed top-3 start-3 z-50 btn shadow-sm"
    aria-label="Open menu"
    style={{
      zIndex: 9999, // Ensures it's always on top of other elements
      position: "fixed", // Keeps the button fixed on the screen
      top: "10px", // Adjust top margin if needed
      left: "10px", // Adjust left margin if needed
    }}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1e293b"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="18" height="2" rx="1" />
      <rect x="3" y="11" width="18" height="2" rx="1" />
      <rect x="3" y="17" width="18" height="2" rx="1" />
    </svg>
  </button>
);
