import "../style/Body.css";

import Logo from "../components/Logo";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import DesktopLanguageBar from "../components/DesktopLanguageBar";
import DesktopMenu from "../components/DesktopMenu";
import LogInSignupIcon from "../components/Login-SignUp-Icon";
import BigAutoProducts from "../components/BigAutoProducts";

function BigAutoProductsPage() {
  return (
    <div className="LogIn-SignUp">
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

      <div className="BigAutoProducts">
        <BigAutoProducts />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default BigAutoProductsPage;
