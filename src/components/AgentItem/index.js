import "./index.css";

const AgentItem = (props) => {
  const { user, deleteUser } = props;
  const { Email, id, Password } = user;
  const onClickDel = () => {
    deleteUser(id);
    console.log(id);
  };
  return (
    <li className="li">
      <div className="list-container">
        <p>
          {Email}
          <span className="pwd">password:{Password}</span>
        </p>
        <button className="del-btn" type="button" onClick={onClickDel}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default AgentItem;
