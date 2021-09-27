import "./App.css";
import RegisterNav from "./registerNav";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <RegisterNav />
      <form>
        <label>Email address</label>
        <input></input>
        <label>Password</label>
        <input type="password"></input>
        <p>
          <Link className="orange" to="/forgotpassword">
            Forgot password
          </Link>
        </p>
        <button>Login</button>
      </form>
    </>
  );
}

export default Login;
