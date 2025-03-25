"use client";
import React, { useState } from "react";
import { MenuButton } from "./MenuButton";
import { NavigationMenu } from "./NavigationMenu";

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <MenuButton onClick={() => setIsOpen(!isOpen)} />

      {/* Sidebar Menu (Only Renders When Open) */}
      {isOpen && (
        <NavigationMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default MobileNavigation;
