import RegisterNav from "./registerNav";

function ForgotPassword() {
  return (
    <>
      <RegisterNav />
      <form>
        <label>Email address</label>
        <input></input>
        <button>Reset password</button>
      </form>
    </>
  );
}

export default ForgotPassword;
