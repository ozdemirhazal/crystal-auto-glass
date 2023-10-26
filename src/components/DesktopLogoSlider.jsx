import { useState, useEffect } from "react";
import "../style/DesktopLogoSlider.css";
import AudiLogo from "../library/logos/audilogo.png";
import BmwLogo from "../library/logos/bmwlogo.png";
import FordLogo from "../library/logos/fordlogo.png";
import PegoLogo from "../library/logos/pegologo.png";
import MercedesLogo from "../library/logos/mercedeslogo.png";
import KiaLogo from "../library/logos/kialogo.png";
import RenaultLogo from "../library/logos/renaultlogo.png";
import VwLogo from "../library/logos/vwlogo.png";

const logos = [
  { id: 1, src: AudiLogo },
  { id: 2, src: BmwLogo },
  { id: 3, src: FordLogo },
  { id: 4, src: PegoLogo },
  { id: 5, src: MercedesLogo },
  { id: 6, src: KiaLogo },
  { id: 7, src: RenaultLogo },
  { id: 8, src: VwLogo },
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
