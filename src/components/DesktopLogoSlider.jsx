import { useState, useEffect } from "react";
import "../style/DesktopLogoSlider.css";

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

const DesktopLogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="logo-slider">
      {logos.map((logo, index) => (
        <img
          key={logo.id}
          src={logo.src}
          alt={`Logo ${logo.id}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default DesktopLogoSlider;
