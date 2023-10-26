import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/CaravanProducts.css";

function CaravanProducts() {
  const { t } = useTranslation();
  const caravanProducts = t("caravanProducts", { returnObjects: true });

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-list">
      <h1>{t("categories.0")}</h1>
      <div className="product-grid">
        {caravanProducts.map((product, index) => (
          <div
            className="product"
            key={index}
            onClick={() => openProductDetails(product)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              {t("price-label")}: {product.price} €
            </p>
            <button>{t("buy-button")}</button>
          </div>
        ))}
      </div>

      {/* Ürün detayları için modal */}
      {selectedProduct && (
        <div className="product-modal">
          <div className="product-details">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p>
              {t("price-label")}: {selectedProduct.price} €
            </p>
            <button>{t("buy-button")}</button>
          </div>
          <button onClick={closeProductDetails} className="close-button">
            {t("close-button")}
          </button>
        </div>
      )}
    </div>
  );
}

export default CaravanProducts;
