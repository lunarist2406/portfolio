"use client";
import { useEffect, useState } from "react";

export default function ScrollTriggerSlide() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".slide-in");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          setVisibleSections((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        } else {
          setVisibleSections((prev) => prev.filter((i) => i !== index));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSlideStyle = (index: number) => ({
    transform: visibleSections.includes(index) ? "translateY(0)" : "translateY(50px)",
    opacity: visibleSections.includes(index) ? 1 : 0,
    transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
    height: "300px",
    margin: "20px 0",
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold"
  });

  return (
    <div>
      <div className="slide-in" style={getSlideStyle(0)}>Phần 1</div>
      <div className="slide-in" style={getSlideStyle(1)}>Phần 2</div>
      <div className="slide-in" style={getSlideStyle(2)}>Phần 3</div>
    </div>
  );
}
