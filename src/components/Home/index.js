import { useNavigate } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();

  const onClickAdmin = () => {
    navigate("/admin-view");
  };

  const onClickAgent = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <div className="home">
        <div className="button-container">
          <div className="card">
            <button className="btn" type="button" onClick={onClickAdmin}>
              <h1 className="heading">Super Admin</h1>
              <img
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mh8vDFdunxMQ7wyAB6uP8C2mU7Kwjw9RIA&usqp=CAU"
                alt="img"
              />
            </button>

            <button className="btn" type="button" onClick={onClickAgent}>
              <h1 className="heading">Agent</h1>
              <img
                className="logo"
                src="https://media.sproutsocial.com/uploads/illustration-customer-care-object.png"
                alt="img"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
