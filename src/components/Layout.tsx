import React, { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};



export { Layout };  // named export for use in _app.tsx
export default Layout;  // default export for use in other places

