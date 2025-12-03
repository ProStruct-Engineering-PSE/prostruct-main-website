"use client";

import { useEffect } from "react";

// Add 'home' class to body tag for homepage-specific styles
// WordPress CSS targets: body.home .o-header (transparent/absolute header)
export function HomeBodyClass() {
  useEffect(() => {
    document.body.classList.add("home");

    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  return null;
}
