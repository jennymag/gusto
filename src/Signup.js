import "./App.css";
import RegisterNav from "./registerNav";

function Signup() {
  return (
    <>
      <RegisterNav />
      <form>
        <label>Email address</label>
        <input></input>
        <label>Password</label>
        <input type="password"></input>
        <label>Name</label>
        <input></input>
        <button>Sign up</button>
      </form>
    </>
  );
}

export default Signup;
