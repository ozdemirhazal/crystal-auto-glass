import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../style/CategoryList.css";

function CategoryList() {
  const { t } = useTranslation();

  const categories = [
    { name: t("categories.0"), image: "./src/library/card-caravan.png" },
    { name: t("categories.1"), image: "./src/library/card-car.png" },
    { name: t("categories.2"), image: "./src/library/card-bigauto.png" },
    { name: t("categories.3"), image: "./src/library/card-yacht.png" },
    { name: t("categories.4"), image: "./src/library/card-carglassfilm.png" },
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
                <img src={category.image} alt={category.name} />
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
