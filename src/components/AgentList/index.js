import AgentItem from "../AgentItem";
import "./index.css";

const AgentList = () => {
  const deleteUser = (id) => {
    const array = JSON.parse(localStorage.getItem("data"));

    const updatedArray = array.filter((item) => item.id !== id);
    localStorage.setItem("data", JSON.stringify(updatedArray));
  };
  const array = JSON.parse(localStorage.getItem("data"));

  return (
    <div className="agentItem-container">
      <ul className="ul">
        <h1 className="agent-heading">Agent List</h1>
        {array &&
          array.map((item) => (
            <AgentItem key={item.id} user={item} deleteUser={deleteUser} />
          ))}
      </ul>
    </div>
  );
};

export default AgentList;
