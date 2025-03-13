"use client";
import React, { useState } from "react";
import { MenuButton } from "./MenuButton";
import { NavigationMenu } from "./NavigationMenu";

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative w-full min-h-screen bg-slate-700">
      <MenuButton onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <NavigationMenu />}
    </main>
  );
};

export default MobileNavigation;
