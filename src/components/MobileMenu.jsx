import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBars } from "@fortawesome/free-solid-svg-icons";
import "../style/MobileMenu.css";

function MobileMenu() {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {isMobile ? (
        <label>
          <input type="checkbox" onClick={toggleMenu} />
          <span className="menu">
            <FontAwesomeIcon icon={faBars} color="black" size="lg" />
          </span>
          {isMenuOpen && (
            <ul>
              <li>
                <a href="/">{t("menu.homepage")}</a>
              </li>
              <li>
                <a href="/products">{t("menu.products")}</a>
              </li>
              <li>
                <a href="/about">{t("menu.about")}</a>
              </li>
              <li>
                <a href="/#footer" onClick={scrollToFooter}>
                  {t("menu.contact")}
                </a>
              </li>
              <div className="language-data">
                <FontAwesomeIcon icon={faGlobe} color="black" size="lg" />
                <li>
                  <a
                    data-translation-key="language-en"
                    href="#"
                    onClick={() => handleLanguageChange("en")}
                  >
                    {t("language_en")}
                  </a>
                </li>
                <li>
                  <a
                    data-translation-key="language-tr"
                    href="#"
                    onClick={() => handleLanguageChange("tr")}
                  >
                    {t("language_tr")}
                  </a>
                </li>
                <li>
                  <a
                    data-translation-key="language-de"
                    href="#"
                    onClick={() => handleLanguageChange("de")}
                  >
                    {t("language_de")}
                  </a>
                </li>
              </div>
            </ul>
          )}
        </label>
      ) : null}
    </div>
  );
}

export default MobileMenu;
