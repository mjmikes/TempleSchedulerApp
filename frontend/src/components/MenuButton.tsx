import React from "react";
import { MenuIcon } from "./MenuIcon";

interface MenuButtonProps {
  onClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => (
  <div className="menu-button-container">
    <button
      onClick={onClick}
      className="absolute top-0 left-0 justify-center items-center w-11 h-11 bg-black rounded-md border border-solid border-[color:var(--sds-color-border-brand-default,#fff)] top-[67px]"
      aria-label="Open menu"
    >
      <MenuIcon />
    </button>
  </div>
);
