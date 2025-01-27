"use client";

import { jarallax } from "jarallax";
import { useEffect } from "react";

export default function ParallaxContainer(props) {
  useEffect(() => {
    const elements = document.querySelectorAll(".parallax-5");

    // Initialize jarallax if elements are found
    if (elements.length > 0) {
      jarallax(elements, {
        speed: 0.5,
      });
    }

    // Cleanup (optional for jarallax)
    return () => {
      if (elements.length > 0) {
        jarallax(elements, "destroy");
      }
    };
  }, []);

  return (
    <div
      {...props} // Spread props safely
      className={`${props.className || ""} parallax-5`} // Ensure className includes "parallax-5"
      style={props.style || {}} // Safeguard style
    >
      {props.children || null} {/* Render children safely */}
    </div>
  );
}
