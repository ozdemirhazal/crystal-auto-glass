import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../style/Logo.css";

function Logo() {
  const { t } = useTranslation();
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
        {isMobile ? t("mobileContent") : t("desktopContent")}
      </Link>
    </div>
  );
}

export default Logo;
