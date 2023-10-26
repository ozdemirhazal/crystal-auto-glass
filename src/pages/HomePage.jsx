import "../style/Body.css";
import Logo from "../components/Logo";
import MobileMenu from "../components/MobileMenu";
import VideoBanner from "../components/VideoBanner";
import CardSlider from "../components/CardSlider";
import ThirdContainer from "../components/ThirdContainer";
import WhyUs from "../components/WhyUs";
import DesktopLogoSlider from "../components/DesktopLogoSlider";
import MobileLogoSlider from "../components/MobileLogoSlider";
import Footer from "../components/Footer";
import DesktopLanguageBar from "../components/DesktopLanguageBar";
import DesktopMenu from "../components/DesktopMenu";
import LogInSignupIcon from "../components/Login-SignUp-Icon";

function Home() {
  return (
    <div className="HomePage">
      <div className="Logo">
        <Logo />
      </div>

      <div className="DesktopMenu">
        <DesktopMenu />
      </div>

      <div className="MobileMenu">
        <MobileMenu />
      </div>

      <div className="DesktopLanguageBar">
        <DesktopLanguageBar />
      </div>

      <div className="Login-SignUp-Icon">
        <LogInSignupIcon />
      </div>

      <div className="VideoBanner">
        <VideoBanner />
      </div>

      <div className="CardSlider">
        <CardSlider />
      </div>

      <div className="ThirdContainer">
        <ThirdContainer />
      </div>

      <div className="DesktopLogoSlider">
        <DesktopLogoSlider />
      </div>

      <div className="MobileLogoSlider">
        <MobileLogoSlider />
      </div>

      <div className="WhyUs">
        <WhyUs />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
