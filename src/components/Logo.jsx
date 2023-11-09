import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../library/logo.png";
import "../style/Logo.css";

function Logo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`logo ${isMobile ? "mobile" : "desktop"}`}>
      <Link to="/" className="logo-link">
        <img src={LogoImage} height="60px" width="110px" alt=""></img>
      </Link>
    </div>
  );
}

export default Logo;
