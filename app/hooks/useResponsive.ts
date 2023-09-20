"use client";
import { useState, useEffect } from "react";

const useResponsive = (breakpoint: number) => {
  const [isVisible, setIsVisible] = useState<undefined | boolean>(undefined);
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth <= breakpoint);
    };

    // Check for window availability during initial render
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [breakpoint, window.innerWidth]);

  return isVisible;
};

export default useResponsive;
