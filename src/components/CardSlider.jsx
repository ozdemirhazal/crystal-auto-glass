import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import "../style/CardSlider.css";

const CardSlider = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-slider">
      <Slider {...settings}>
        <div className="card">
          <img src="./src/library/card-caravan.png" alt="Card 1" />
          <h3>{t("card-caravan-h1")}</h3>
          <p>{t("card-caravan-p")}</p>
        </div>
        <div className="card">
          <img src="./src/library/card-car.png" alt="Card 2" />
          <h3>{t("card-car-h1")}</h3>
          <p>{t("card-car-p")}</p>
        </div>
        <div className="card">
          <img src="./src/library/card-bigauto.png" alt="Card 3" />
          <h3>{t("card-bigauto-h1")}</h3>
          <p>{t("card-bigauto-p")}</p>
        </div>
        <div className="card">
          <img src="./src/library/card-yacht.png" alt="Card 4" />
          <h3>{t("card-yacht-h1")}</h3>
          <p>{t("card-yacht-p")}</p>
        </div>
        <div className="card">
          <img src="./src/library/card-carglassfilm.png" alt="Card 5" />
          <h3>{t("card-carfilm-h1")}</h3>
          <p>{t("card-carfilm-p")}</p>
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
