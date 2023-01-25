import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const loginDetails = JSON.parse(localStorage.getItem("data"));
    const LoginSuccess = loginDetails.filter(
      (user) => user.Email === email && user.Password === password
    );
    if (LoginSuccess.length === 1) {
      navigate("/booking-page");
    } else {
      setErr("Invalid email and password");
    }
  };

  return (
    <>
      <Header />
      <div className="agent-login-main-container">
        <div className="agent-login-sub-container">
          <h1 className="login-heading">Agent Login</h1>
          <form onSubmit={onSubmitLogin} className="agent-login-form">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter valid email"
              className="agent-login-input"
              type="text"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="agent-login-input"
              type="password"
            />
            <button className="login-btn" type="submit">
              Login
            </button>
            <p className="err">{err}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
