// NoLayout.tsx
import React from "react";

interface NoLayoutProps {
  children: React.ReactNode;
}

const NoLayout: React.FC<NoLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default NoLayout;
