import "../style/Body.css";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import DesktopLanguageBar from "../components/DesktopLanguageBar";
import MobileMenu from "../components/MobileMenu";
import DesktopMenu from "../components/DesktopMenu";
import LogInSignupIcon from "../components/Login-SignUp-Icon";
import CategoryList from "../components/CategoryList";

function Products() {
  return (
    <div className="ProductsPage">
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

      <div className="CategoryList">
        <CategoryList />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Products;
