"use client";

import { useEffect } from "react";

export default function Split() {
  useEffect(() => {
    const addPaddingRight = () => {
      const paddingRightElement = document.getElementById("paddingRight");
      const paddingRightContainer = document.getElementById(
        "paddingRightContainer"
      );

      // Ensure both elements exist before applying styles
      if (paddingRightElement && paddingRightContainer) {
        const containerWidth = paddingRightContainer.offsetWidth;
        const paddingValue = Math.max(
          0,
          (window.innerWidth - containerWidth) / 2
        );
        paddingRightElement.style.paddingRight = `${paddingValue}px`;
      }
    };

    // Initial calculation
    addPaddingRight();

    // Add resize event listener
    window.addEventListener("resize", addPaddingRight);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", addPaddingRight);
    };
  }, []);

  return null; // No UI to render
}
