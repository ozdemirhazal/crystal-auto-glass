import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../style/CategoryList.css";
import CardCaravan from "../library/card-caravan.png";
import CardCar from "../library/card-car.png";
import CardBigAuto from "../library/card-bigauto.png";
import CardYacht from "../library/card-yacht.png";
import CardCarGlassFilm from "../library/card-carglassfilm.png";

function CategoryList() {
  const { t } = useTranslation();

  const categories = [
    { name: t("categories.0"), src: CardCaravan },
    { name: t("categories.1"), src: CardCar },
    { name: t("categories.2"), src: CardBigAuto },
    { name: t("categories.3"), src: CardYacht },
    { name: t("categories.4"), src: CardCarGlassFilm },
  ];

  return (
    <div className="page-container">
      <div className="category-list">
        <h1>{t("category-h1")}</h1>
        <div className="category-boxes">
          {categories.map((category, index) => (
            <Link
              to={`/products/${category.name
                .toLowerCase()
                .split(" ")
                .join("-")}`}
              key={index}
            >
              <div className="category-box">
                <img src={category.src} alt={category.name} />
                <p>{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
