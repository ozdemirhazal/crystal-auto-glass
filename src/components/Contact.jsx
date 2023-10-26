import { useEffect, useRef } from "react";
import Footer from "./Footer";

function Contact() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (
      window.location.pathname === "/" &&
      window.location.hash === "#footer"
    ) {
      scrollToFooter();
    }
  }, []);

  return (
    <div>
      <a ref={footerRef} id="footer" />
      <Footer />
    </div>
  );
}

export default Contact;
