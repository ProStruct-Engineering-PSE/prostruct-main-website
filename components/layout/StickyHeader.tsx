"use client";

import { useEffect } from "react";

// Add sticky class to header on scroll
export function StickyHeaderScript() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".o-header");
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // This component doesn't render anything
}
