import { useTranslation } from "react-i18next";
import "../style/DesktopLanguageBar.css";

function DesktopLanguageBar() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div id="desktop-languagebar" className="desktop-language">
      <ul>
        <li>
          <a
            href="#"
            onClick={() => handleLanguageChange("en")}
            data-translation-key="language-en"
          >
            {t("language_en")}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleLanguageChange("tr")}
            data-translation-key="language-tr"
          >
            {t("language_tr")}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleLanguageChange("de")}
            data-translation-key="language-de"
          >
            {t("language_de")}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DesktopLanguageBar;
