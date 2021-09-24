import "./App.css";
import logo from "./pictures/logo.png";

function Login() {
  return (
    <>
      <div className="flexContainer">
        <nav>
          <div className="logoContainer">
            <img src={logo} />
          </div>

          <ul>
            <li className="logInLink">Login</li>
            <li>Sign-up</li>
          </ul>
        </nav>

        <form>
          <label>Email address</label>
          <input></input>
          <label>Password</label>
          <input type="password"></input>
          <p>Forgot password</p>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
