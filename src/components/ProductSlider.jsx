import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "../style/ProductSlider.css";

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const { t } = useTranslation();
  const homepageproducts = t("homepageproducts", { returnObjects: true });

  return (
    <div className="product-slider">
      <Slider {...settings}>
        {homepageproducts.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price} €</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
