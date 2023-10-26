import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../style/DesktopMenu.css";

function DesktopMenu() {
  const { t } = useTranslation();

  return (
    <div id="desktop-menu" className="desktop-menu">
      <ul>
        <li>
          <Link to="/"> {t("menu.homepage")}</Link>
        </li>
        <li>
          <Link to="/products">{t("menu.products")}</Link>
        </li>
        <li>
          <Link to="/about">{t("menu.about")}</Link>
        </li>
        <li>
          <a href="#footer">{t("menu.contact")}</a>
        </li>
      </ul>
    </div>
  );
}

export default DesktopMenu;
