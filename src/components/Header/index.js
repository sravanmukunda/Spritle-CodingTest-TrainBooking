import { Link } from "react-router-dom";

import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link className="link" to="/">
        <h1>Train Ticket Booking</h1>
      </Link>
      <div className="home-login-container">
        <Link className="link" to="/">
          <p className="text">Home</p>
        </Link>
        <Link className="link" to="/login">
          <p className="text">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
