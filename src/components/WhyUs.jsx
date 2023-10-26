import { useTranslation } from "react-i18next";
import insuranceImage from "../library/insurance.png";
import certifiedImage from "../library/certified.png";
import repairImage from "../library/repair.png";
import installingImage from "../library/installing.png";
import "../style/WhyUs.css";

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <div className="whyus-container">
      <div className="whyus">
        <div className="whyus-text">
          <h1 data-translation-key="whyus-h1">{t("whyus-h1")}</h1>
          <p data-translation-key="whyus-p">{t("whyus-p")}</p>
        </div>

        <div className="other-content">
          <div className="insurance">
            <div className="insurance-image">
              <img src={insuranceImage} alt="" />
            </div>
            <div className="insurance-text">
              <h1 data-translation-key="insurance-h1">{t("insurance-h1")}</h1>
              <p data-translation-key="insurance-p">{t("insurance-p")}</p>
            </div>
          </div>

          <div className="certified">
            <div className="certified-image">
              <img src={certifiedImage} alt="" />
            </div>
            <div className="certified-text">
              <h1 data-translation-key="certified-h1">{t("certified-h1")}</h1>
              <p data-translation-key="certified-p">{t("certified-p")}</p>
            </div>
          </div>

          <div className="repair">
            <div className="repair-image">
              <img src={repairImage} alt="" />
            </div>
            <div className="repair-text">
              <h1 data-translation-key="repair-h1">{t("repair-h1")}</h1>
              <p data-translation-key="repair-p">{t("repair-p")}</p>
            </div>
          </div>

          <div className="installing">
            <div className="installing-image">
              <img src={installingImage} alt="" />
            </div>
            <div className="installing-text">
              <h1 data-translation-key="installing-h1">{t("installing-h1")}</h1>
              <p data-translation-key="installing-p">{t("installing-p")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
