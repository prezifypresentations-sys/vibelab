"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    // Create the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the class that triggers the CSS animation
            entry.target.classList.add("is-visible");
            // Stop observing once it's visible so it doesn't animate out
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -40px 0px", // Trigger slightly inside the viewport
        threshold: 0,
      }
    );

    // Find all elements with the animate-on-scroll class
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
