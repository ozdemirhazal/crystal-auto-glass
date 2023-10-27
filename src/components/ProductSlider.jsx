import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "../style/ProductSlider.css";
import CardCaravan from "../library/card-caravan.png";
import CardCar from "../library/card-car.png";
import CardBigAuto from "../library/card-bigauto.png";
import CardYacht from "../library/card-yacht.png";
import CardCarGlassFilm from "../library/card-carglassfilm.png";

const Images = [
  { id: 1, src: CardCaravan },
  { id: 2, src: CardCar },
  { id: 3, src: CardBigAuto },
  { id: 4, src: CardYacht },
  { id: 5, src: CardCarGlassFilm },
];

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
  const homepageProducts = t("homepageproducts", { returnObjects: true });

  return (
    <div className="product-slider">
      <Slider {...settings}>
        {homepageProducts.map((product, index) => {
          // Her ürünün `id` değerine göre resmi al
          const image = Images.find((image) => image.id === product.id);
          return (
            <div key={index}>
              <img src={image.src} alt={`Image ${image.id}`} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price} €</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
