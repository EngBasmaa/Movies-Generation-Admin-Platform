import React from "react";
import { HeaderNav } from "../components";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeProvider";
import { Footer } from "../components";


export function SharedLayout() {
  return (
    <ThemeProvider>
      <HeaderNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
