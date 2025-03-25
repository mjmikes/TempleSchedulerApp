import React from "react";

interface NavigationButtonProps {
  variant: "menu" | "back";
  className?: string;
}

const MenuIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5"
      stroke="#1E1E1E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BackIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3333 10.5H4.66663M4.66663 10.5L10.5 16.3334M4.66663 10.5L10.5 4.66669"
      stroke="#F5F5F5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  variant,
  className = "",
}) => {
  const isMenu = variant === "menu";

  return (
    <button
      className={`d-flex justify-content-center align-items-center rounded-circle border border-dark ${
        isMenu ? "bg-white text-dark" : "bg-dark text-white"
      } shadow ${className}`}
      style={{ width: "44px", height: "44px" }}
      aria-label={isMenu ? "Open menu" : "Go back"}
    >
      {isMenu ? <MenuIcon /> : <BackIcon />}
    </button>
  );
};
