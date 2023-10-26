import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../style/Login-SignupIcon.css";

function LogInSignUpIcon() {
  return (
    <div className="loginsignup-container">
      <Link to="/login-signup">
        <div className="login-icon">
          <FontAwesomeIcon icon={faUser} color="black" size="sm" />
        </div>
      </Link>
    </div>
  );
}

export default LogInSignUpIcon;
