import logo from "./pictures/logo.png";
import { Link } from "react-router-dom";

function registerNav() {
  return (
    <>
      <nav>
        <div className="logoContainer">
          <img src={logo} />
        </div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default registerNav;
