import { useState } from "react";
import Header from "../Header";
import AgentList from "../AgentList";
import { v4 } from "uuid";
import "./index.css";

const AdminView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterpwd, setReEnteredPwd] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [add, setAdd] = useState("");

  const AgentCreateHandler = (e) => {
    e.preventDefault();

    if (
      password === reEnterpwd ||
      email !== "" ||
      password !== "" ||
      reEnterpwd !== "" ||
      dob !== "" ||
      phone !== "" ||
      add !== ""
    ) {
      let data = {
        id: v4(),
        Email: email,
        Password: password,
        Dob: dob,
        Phone: phone,
        Address: add
      };
      let formData = JSON.parse(localStorage.getItem("data")) || [];
      formData.push(data);
      localStorage.setItem("data", JSON.stringify(formData));
      //localStorage.clear();

      setAdd("");
      setDob("");
      setEmail("");
      setPassword("");
      setPhone("");
      setReEnteredPwd("");
    } else {
      alert("Please fill all the forms");
    }
  };

  return (
    <>
      <Header />
      <div className="admin-container">
        <form className="form-container" onSubmit={AgentCreateHandler}>
          <h1>Create New Agent</h1>
          <input
            className="input"
            placeholder="Enter Valid Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="text"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input"
            type="password"
            value={reEnterpwd}
            placeholder="re-enter password"
            onChange={(e) => setReEnteredPwd(e.target.value)}
          />
          <input
            className="input"
            type="date"
            value={dob}
            placeholder="enter DOB"
            onChange={(e) => setDob(e.target.value)}
          />
          <input
            className="input"
            type="text"
            value={phone}
            placeholder="Enter Phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="input"
            type="text"
            value={add}
            placeholder="Enter Address"
            onChange={(e) => setAdd(e.target.value)}
          />
          <button className="input" type="submit">
            Add Agent
          </button>
        </form>
        <hr />
        <AgentList />
      </div>
    </>
  );
};

export default AdminView;
