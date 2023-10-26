import { useState, useEffect } from "react";
import "../style/MobileLogoSlider.css";

const logos = [
  { id: 1, src: "./src/library/logos/audilogo.png" },
  { id: 2, src: "./src/library/logos/bmwlogo.png" },
  { id: 3, src: "./src/library/logos/fordlogo.png" },
  { id: 4, src: "./src/library/logos/pegologo.png" },
  { id: 5, src: "./src/library/logos/mercedeslogo.png" },
  { id: 6, src: "./src/library/logos/kialogo.png" },
  { id: 7, src: "./src/library/logos/renaultlogo.png" },
  { id: 8, src: "./src/library/logos/vwlogo.png" },
];

const MobileLogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth < 768;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === (isMobile ? 3 : 7) ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [isMobile]);

  return (
    <div className={`mobile-logo-slider ${isMobile ? "mobile" : "web"}`}>
      {logos
        .slice(currentIndex, currentIndex + (isMobile ? 4 : 8))
        .map((logo) => (
          <img
            key={logo.id}
            src={logo.src}
            alt={`Logo ${logo.id}`}
            className="active"
          />
        ))}
    </div>
  );
};

export default MobileLogoSlider;
