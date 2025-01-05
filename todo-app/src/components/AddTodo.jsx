import { useState } from "react";
import { MdAdd } from "react-icons/md";

const AddTodo = ({ handleAddNewItem }) => {
  let [newTodoName, setNewTodoName] = useState("");
  let [newTodoDate, setNewTodoDate] = useState("");

  const handleNameChange = (event) => {
    setNewTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setNewTodoDate(event.target.value);
  };

  const handleNewItem = () => {
    handleAddNewItem(newTodoName, newTodoDate);
    setNewTodoName("");
    setNewTodoDate("");
  };

  return (
    <div className="container text-start">
      <div className="row kgRow">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter the TODO task"
            onChange={handleNameChange}
            value={newTodoName}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handleDateChange}
            value={newTodoDate}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kgButton"
            onClick={handleNewItem}
          >
            <MdAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
