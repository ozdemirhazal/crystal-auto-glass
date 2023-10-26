
import { useTranslation } from "react-i18next";
import "../style/CaravanProducts.css";

function BigAutoProducts() {
  const { t } = useTranslation();

  const bigautoProducts = t("bigautoProducts", { returnObjects: true });

  return (
    <div className="product-list">
      <h1>{t("categories.0")}</h1>
      <div className="product-grid">
        {bigautoProducts.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              {t("price-label")}: {product.price} €
            </p>
            <button>{t("buy-button")}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BigAutoProducts;
